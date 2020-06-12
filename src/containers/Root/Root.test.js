import React from 'react'
import { render } from '@testing-library/react'
import Root from './Root'

test('renders logo', () => {
  const { getByText } = render(<Root />)
  const title = getByText(/Days Counter/i)
  expect(title).toBeInTheDocument()
})

test('renders CTA', () => {
  const { getByText } = render(<Root />)
  const button = getByText(/Create Counter/i)
  expect(button).toBeInTheDocument()
})

test('renders examples link', () => {
  const { getByText } = render(<Root />)
  const button = getByText(/see some examples/i)
  expect(button).toBeInTheDocument()
})
