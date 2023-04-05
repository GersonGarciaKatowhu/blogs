import { Helmet } from "react-helmet"
import Header from "./Header"
function Pages({children, title, dataPublication }) {
  return (
    <>
    <Header />
    <main className="centerAll">
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <h1 className="no-margin center">{title}</h1>
        {children}
        <p className="data-publication center">{dataPublication}</p>
    </main>
    </>
  )
}

export default Pages