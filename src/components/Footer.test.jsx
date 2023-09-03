import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe("App Component", () => {
  let container

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    ).container
  })

  it("Renders the Footer component", () => {
    expect(container.querySelector("p")).not.toBeNull()
    expect(container.querySelector("p")).toHaveTextContent("Kampua Design")
  })
})