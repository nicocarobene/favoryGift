import React, { Suspense } from 'react'
import useNearScreen from '../Hook/useNearScreen'
import './style.css'
const TrendingSearches = React.lazy(() => {
  return import('./TrendingSearches')
})

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen()
  return (
    <div className='categoriList__container' ref={fromRef}>
      <Suspense fallback='Cargando Componente...'>
        {isNearScreen ? <TrendingSearches /> : 'null'}
      </Suspense>
    </div>
  )
}
