import { Link } from "react-router-dom"
import Pages from "../component/Pages"

function Blogs() {
  const contents = (
    <div className="padding-general">
                <Link
                    to="/blogs/maderas"
                    className="link-blog"
                >
                    Maderas
                </Link>
            </div>
  )
  return (
    <div>
          <main className="centerAll" >
            <Pages contents={contents} title='Blogs'/>
          </main>
    </div>
  )
}

export default Blogs