import { Link } from "react-router-dom"
import Pages from "../component/Pages"
function Proyects() {
  return (
    <div>
            <Pages title='Proyectos'>
            <div className="padding-general">
                <Link
                    to="/proyects/maderas"
                    className="link-blog"
                >
                    Maderas
                </Link>
                <Link
                    to="/proyects/usecontext"
                    className="link-blog"
                >
                    UseContext
                </Link>
            </div>
            </Pages>
    </div>
  )
}

export default Proyects