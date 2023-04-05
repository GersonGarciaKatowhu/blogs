import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
            <nav>
              <Link className="center nav-link" to="/">
                Inicio
              </Link>
              <Link className="center nav-link" to="/about">
                Sobre mi
              </Link>
              <Link className="center nav-link" to="/proyects">
                Proyectos
              </Link>
            </nav>
          </header>
    </>
  )
}
export default Header
