import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Maderas from "./pages/proyects/Maderas";
import Proyects from "./pages/Proyects";
import UseContext from "./pages/proyects/pruebas/UseContext";
import StateCompo from "./hooks/useContext/StateCompo";
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/proyects/maderas", element: <Maderas /> },
  { path: "/proyects", element: <Proyects /> },
  { path: "/proyects/usecontext", element: <UseContext /> },
];

function App() {
  return (
    <div className="App">
      <StateCompo>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </StateCompo>
    </div>
  );
}

export default App;
