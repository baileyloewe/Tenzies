import { describe, test, expect } from "vitest"
import { screen, render } from '@testing-library/react'
import App from "./App.js"
import React from 'react'

describe("App", () => {
    test("Displays App title", () => {
        render(<App />)
        expect(screen.getByText("Tenzies")).toBeInTheDocument()
    })

    test("Displays instructions", () => {
        render(<App />)
        expect(screen.getByText("Roll until all dice are the same. Click each die to freeze it at its current value between rolls.")).toBeInTheDocument()
    })

    test("Displays 10 dice", () => {
        const { container } = render(<App />)
        const dice = container.querySelectorAll(".dice")
        expect(dice).toHaveLength(10)
    })

    test("Displays new game button", () => {
        render(<App />)
        expect(screen.getAllByRole("button")[10]).toBeInTheDocument()
    })
})