import React from 'react'
import useForm from './useForm'
import { useLocation } from 'wouter'
import './Index.css'

const Ratings = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword = '', initialRating = 'g' }) {
  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()

  const handleInput = (e) => {
    updateKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = (e) => {
    updateRating(e.target.value)
  }

  return (
    <form className='searchGifs' onSubmit={handleSubmit} name='login'>
      <input
        placeholder='Search Meme'
        type='text'
        onChange={handleInput}
        value={keyword}
      />
      <select value={rating} onChange={handleChangeRating}>
        {Ratings.map(rating => <option key={rating}>{rating}</option>)}
      </select>
      <button>Buscar</button>
    </form>
  )
}

export default React.memo(SearchForm)
