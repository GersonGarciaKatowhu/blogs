import Pages from "../../../component/Pages"
import { counterContext } from "../../../hooks/useContext/counterConstext"
import { useContext } from "react"

function UseContext() {

  const { counter, increment, decrement, reset } = useContext(counterContext)

  return (
    <Pages title='Pruebas con el hook useContext' dataPublication='5 de abril del 2023'>
      <div className="padding-general">
          <h2>Pruebas con el hook useContext</h2>
          <p>Este es un ejemplo de como uso el hook useContext. Proximamente pondré como usarlo</p>
          <h4>{counter}</h4>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
          <button onClick={reset}>Reset</button>
      </div>
    </Pages>
  )
}

export default UseContext
