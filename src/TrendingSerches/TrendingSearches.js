import React, { useState, useEffect } from 'react'
import {
  CategoryListItem,
  CategoryLink,
  CategoryList
} from './style'
import getTrendingTerms from '../services/getTrendingTermsService'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])

  return (
    <div>
      <CategoryList>
        {trends.map((singleTrend, index) =>
          <CategoryListItem
            key={singleTrend}
            index={index}
          >
            <CategoryLink to={`/search/${singleTrend}`}>
              {singleTrend}
            </CategoryLink>
          </CategoryListItem>)}
      </CategoryList>
    </div>
  )
}
