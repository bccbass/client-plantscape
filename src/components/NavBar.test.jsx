import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from './NavBar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe("App Component", () => {
  let container

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    ).container
  })

  it("Renders the NavBar component", () => {
    expect(container.querySelector("nav")).not.toBeNull()
    expect(container.querySelector("nav")).toHaveTextContent("Home")
    expect(container.querySelector("nav")).toHaveTextContent("My Garden")
    expect(container.querySelector("nav")).toHaveTextContent("My Plants")
  })
})