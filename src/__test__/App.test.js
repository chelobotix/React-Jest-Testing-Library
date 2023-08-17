import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'; //snapshot

import App from '../App'

describe('App Testing', () => {
  test('Check if render', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument();
  })

  test('Check text content', () => {
    render(<App />)
    const h1 = screen.getByText(/Works!/i)
    expect(h1).toHaveTextContent('Works!');
  })

  test('Heading type + text', () => {
    render(<App />)
    const h2 = screen.getByRole('heading', { name: 'React Jest Test' })
    expect(h2).toHaveTextContent('React Jest Test');
  })

  test('By Id', () => {
    render(<App />)
    const h3 = screen.getByTestId("h3_Id")
    expect(h3).toHaveTextContent('Test by data-testid');
  })

  test('Get all by role', () => {
    render(<App />)
    const headingArray = screen.getAllByRole('heading');
    expect(headingArray.length).toBe(3);
  })

  test('Click button', () => {
    render(<App />)
    const button = screen.getByText('Increment')
    const countElement = screen.getByText('0');
    fireEvent.click(button)
    expect(countElement.textContent).toBe('1');
  })

  test('Tree', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot()
  })
})
