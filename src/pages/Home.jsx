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
                    Hola esta es mi pagina espero te guste. Me llamo Emanuel contactame por mis redes sociales
                </p>
            </div>
          </main>
    </div>
  )
}

export default Home