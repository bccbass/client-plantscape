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
})