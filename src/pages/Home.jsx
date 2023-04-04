import { Helmet } from "react-helmet"

function Home() {
  return (
    <div>
      <Helmet>
          <title>Inicio</title>
      </Helmet>
          <main className="centerAll" >
            <h1 className="no-margin">Inicio</h1>
            <div className="padding-general">
                <p>
                   parrafo
                </p>
            </div>
          </main>
    </div>
  )
}

export default Home