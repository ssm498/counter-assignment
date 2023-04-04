// import necessary react testing library helpers here
// import the Counter component here
import App from '../components/App'

import { render, screen, fireEvent } from '@testing-library/react'

beforeEach(() => {
  // Render the Counter component here
  render(<App />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i)
  expect(counterMessage).toBeInTheDocument()
})

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId('count')
  expect(parseInt(countValue.textContent)).toEqual(0)
})

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', { name: '+' })
  fireEvent.click(button)
  const countValue = screen.getByTestId('count')
  expect(parseInt(countValue.textContent)).toEqual(1)
})

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', { name: '-' })
  fireEvent.click(button)
  const countValue = screen.getByTestId('count')
  expect(parseInt(countValue.textContent)).toEqual(-1)
})
