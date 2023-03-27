/* eslint-disable no-undef */
import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import './__mocks__/intersectionObserverMock'
import '@testing-library/jest-dom'

test('render without crashing', () => {
  const { getByText } = render(<App />)
  const title = getByText(/Your last seach meme/i)
  expect(title).toBeInTheDocument()
})
