import Pages from "../component/Pages"

function About() {
  const contents = (
    <div className="padding-general">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, animi. Id quisquam corrupti deserunt, nihil laboriosam veritatis placeat aliquid, illo adipisci vel doloribus quaerat, sequi officiis quis ut unde dolorum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium optio incidunt doloremque! Rerum eum iusto, ipsa, dolorum architecto recusandae similique quos laudantium reprehenderit ea saepe magnam? Quisquam officia eum iusto.
          </p>
        </div>
  )
  return (
    <div>
      <main className="centerAll">
        <Pages contents={contents} title='Sobre mi' />
      </main>
    </div>
  )
}

export default About
