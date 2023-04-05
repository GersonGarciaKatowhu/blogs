import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Maderas from './pages/proyects/Maderas'
import Proyects from "./pages/Proyects";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/proyects/maderas", element: <Maderas /> },
  { path: "/proyects", element: <Proyects /> },
  // {path: '/tests', element: }
];


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
        <nav>
          <Link className='center nav-link' to="/">Inicio</Link>
          <Link className="center nav-link" to="about">Sobre mi</Link>
          <Link className="center nav-link" to="proyects">Proyectos</Link>
            {/*<Link to='tests' className='center nav-link' >Tests</Link>*/}
        </nav>
        </header>
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
    </div>
  );
}

export default App;
