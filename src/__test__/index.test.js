/* eslint-disable no-undef */
import React from 'react'
import App from '../App'
import { fireEvent, render, screen } from '@testing-library/react'
import '../__mocks__/intersectionObserverMock'
import '@testing-library/jest-dom'

test('render without crashing', async () => {
  render(<App />)

  const input = await screen.findByRole('textbox')

  fireEvent.change(input, { target: { value: 'Matrix' } })

  const button = await screen.findByRole('button')

  console.log(button)
  fireEvent.click(button)

  screen.debug()
  const title = await screen.findByText('List of Meme of: MATRIX')

  expect(title).toBeVisible()
})
