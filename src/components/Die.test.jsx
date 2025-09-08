import { describe, test, expect } from 'vitest'
import { screen, render } from "@testing-library/react"
import Die from "./Die.jsx"


describe("Die", () => {
    test("Die shows on screen", () => {
        render(<Die />)
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})