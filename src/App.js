import React from 'react'
import './App.css'
import { Route, Link, Switch } from 'wouter'
import Home from './pages/Home/Home'
import SearchResult from './pages/SearchResult/SearchResult'
import Detail from './pages/Detail/Detail'
import { GifsContextProvider } from './Context/GifsContext'
import TrendingSearches from './TrendingSerches'
import Error404 from './pages/Error/Error404'
import Header from './component/Header/index'
import Login from './pages/Login/index'
import { UserContextProvider } from './Context/UserContext'
import RegisterPage from './pages/Register/Index'
import SearchForm from './component/searchForm'

export default function App () {
  return (
    <UserContextProvider>
      <GifsContextProvider>
        <Header />
        <Link to='/'>
          <h1 className='title'>FavorityGify</h1>
        </Link>
        <SearchForm />
        <div className='App'>
          <div className='Meme__container'>
            <Switch>
              <Route path='/' component={Home} />
              <Route component={SearchResult} path='/search/:meme/:rating?' />

              <Route component={Detail} path='/:gifD/:id' />
              <Route component={Login} path='/login' />
              <Route component={RegisterPage} path='/register' />
              <Route component={Error404} path='/:rest*' />
            </Switch>
          </div>
          <div className='Tranding'>
            <h3 className='Tranding__title'>Memes Trending:</h3>
            <TrendingSearches />
          </div>
        </div>
      </GifsContextProvider>
    </UserContextProvider>
  )
}
