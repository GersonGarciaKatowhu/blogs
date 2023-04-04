import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

function Blogs() {
  return (
    <div>
      <Helmet>
          <title>Blogs</title>
      </Helmet>
          <main className="centerAll" >
            <h1 className="no-margin">Blogs</h1>
            <div className="padding-general">
                <Link
                    to="/blogs/maderas"
                    className="link-blog"
                >
                    Maderas
                </Link>
            </div>
          </main>
    </div>
  )
}

export default Blogs