import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Title from './Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

describe("Title Component", () => {
  let container

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <Title />
      </BrowserRouter>
    ).container
  })

  it("Renders the title component as expected", () => {
    expect(container.querySelector("h1")).toHaveTextContent("PLANTSCAPE")
    expect(container.querySelector("p")).toHaveTextContent("flexible")
  })
})