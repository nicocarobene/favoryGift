/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react'
import useForm from './useForm'

test('should change keyword', () => {
  const { result } = renderHook(() => useForm())

  act(() => {
    result.current.updateKeyword('batman')
  })
  expect(result.current.keyword).toBe('batman')
})

// importante el act porque sino el test funciona sincrono y puede que el expect tenga como valor '' al no llegar a actualizarse el estado...

test('should use initialKeyword', () => {
  const { result } = renderHook(() => useForm({
    initialKeyword: 'matrix'
  }))
  expect(result.current.keyword).toBe('matrix')
})

test('should update correctly times when used twice', () => {
  const { result } = renderHook(() => useForm({
    initialKeyword: 'matrix'
  }))

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('ba')
    result.current.updateKeyword('bat')
    result.current.updateKeyword('batm')
    result.current.updateKeyword('batma')
    result.current.updateKeyword('batman')
  })
  expect(result.current.keyword).toBe('batman')
  expect(result.current.rating).toBe('g')
})
