import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../Hook/useUser'
import Modal from '../Modal/Index'
import Login from '../Login/Index'
import './ButtonFav.css'

function ButtonFav ({ id }) {
  // eslint-disable-next-line no-unused-vars
  const [, navigate] = useLocation()
  const [showModal, setShowModal] = useState(false)
  const { isLogged, addFav, favs, deleteFav } = useUser()

  let isFaved = favs.some(fav => fav === id)

  useEffect(() => {
    isFaved = favs.some(fav => fav === id)
  }, [addFav, favs])

  const handleClick = async () => {
    if (!isLogged) return setShowModal(true)
    isFaved
      ? deleteFav({ id })
      : addFav({ id })
  }

  const handleClose = () => {
    setShowModal(false)
  }
  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', '❌']
    : ['Add Gif to favorites', '❤️']

  const handleLogin = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className='btn' onClick={handleClick}>
        <span aria-label={label} role='img'>{emoji}</span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  )
}

export default React.memo(ButtonFav)
