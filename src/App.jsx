import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Maderas from './pages/blogs/Maderas'
import Blogs from "./pages/Blogs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blogs/maderas", element: <Maderas /> },
  { path: "/blogs", element: <Blogs /> },
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
          <Link className="center nav-link" to="blogs">Blogs</Link>
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
