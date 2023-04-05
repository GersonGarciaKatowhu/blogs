import { Link } from "react-router-dom"
import Pages from "../component/Pages"

function Proyects() {
  return (
    <div>
          <main className="centerAll" >
            <Pages title='Proyectos'>
            <div className="padding-general">
                <Link
                    to="/proyects/maderas"
                    className="link-blog"
                >
                    Maderas
                </Link>
            </div>
            </Pages>
          </main>
    </div>
  )
}

export default Proyects