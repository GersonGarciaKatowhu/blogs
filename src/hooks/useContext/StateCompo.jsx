import { useState } from "react"
import { counterContext } from "./counterConstext"

import React from 'react'

function StateCompo({ children }) {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }

  return (
    <counterContext.Provider
        value={{
            counter,
            increment,
            decrement,
            reset
        }}
    >
        { children }
    </counterContext.Provider>
  )
}

export default StateCompo