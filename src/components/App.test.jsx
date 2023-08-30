import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe("App Component", () => {
  let container

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ).container
  })

  it("Renders the Login component", () => {
    expect(container.querySelector("form")).not.toBeNull()
    expect(container.querySelector("form")).toHaveTextContent("Email")
  })

  it('Renders the Register component when Register is clicked', async () => {
    await userEvent.click(screen.getByText('Register'))

    expect(container.querySelector('form')).not.toBeNull()
    expect(container.querySelector('form')).toHaveTextContent('First Name')
    expect(container.querySelector('form')).toHaveTextContent('Last Name')
    expect(container.querySelector('form')).toHaveTextContent('Email')
    expect(container.querySelector('form')).toHaveTextContent('Password')
  })

  it("Renders the AltNavBar component", () => {
    expect(container.querySelector('nav')).not.toBeNull()
    expect(container.querySelector('nav')).toHaveTextContent("Register")
  })
})