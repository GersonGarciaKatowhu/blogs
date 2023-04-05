import { Link } from "react-router-dom"
import Pages from "../component/Pages"

function Blogs() {
  return (
    <div>
          <main className="centerAll" >
            <Pages title='Blogs'>
            <div className="padding-general">
                <Link
                    to="/blogs/maderas"
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

export default Blogs