import React, { Suspense } from 'react'
import useNearScreen from '../Hook/useNearScreen'

const TrendingSearches = React.lazy(() => {
  return import('./TrendingSearches')
})

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen()
  return (
    <div ref={fromRef}>
      <Suspense fallback='Cargando Componente...'>
        {isNearScreen ? <TrendingSearches /> : 'null'}
      </Suspense>
    </div>
  )
}
