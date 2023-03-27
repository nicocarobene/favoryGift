import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '20px'
    })

    if (element)observer.observe(element)

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
