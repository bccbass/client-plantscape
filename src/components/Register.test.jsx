import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Register from './Register.jsx'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe("Register Component", () => {
  let container

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    ).container
  })

  it("Renders the Register component", () => {
    expect(container.querySelector("form")).not.toBeNull()
    expect(container.querySelector("form")).toHaveTextContent("Email")
    expect(container.querySelector("h3")).toHaveTextContent("New User Registration")
  })

  it('Shows form details', () => {
    expect(container.querySelector('form')).not.toBeNull()
    expect(container.querySelector('form')).toHaveTextContent('First Name')
    expect(container.querySelector('form')).toHaveTextContent('Last Name')
    expect(container.querySelector('form')).toHaveTextContent('Email')
    expect(container.querySelector('form')).toHaveTextContent('Password')
  })
})