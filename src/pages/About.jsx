import { Helmet } from "react-helmet"

function About() {
  return (
    <div>
      <Helmet>
        <title>Sobre mi</title>
      </Helmet>
      <main className="centerAll">
        <h1 className="no-margin">Sobre mi</h1>
        <div className="padding-general">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, animi. Id quisquam corrupti deserunt, nihil laboriosam veritatis placeat aliquid, illo adipisci vel doloribus quaerat, sequi officiis quis ut unde dolorum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium optio incidunt doloremque! Rerum eum iusto, ipsa, dolorum architecto recusandae similique quos laudantium reprehenderit ea saepe magnam? Quisquam officia eum iusto.
          </p>
        </div>
      </main>
    </div>
  )
}

export default About
