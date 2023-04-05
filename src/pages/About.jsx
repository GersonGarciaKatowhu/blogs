import Pages from "../component/Pages";
import gato from "../assets/gato.jpg";

function About() {
  return (
    <div>
      <main className="centerAll">
        <Pages title="Sobre mi">
          <div className="padding-general">
            <p>
              Esta es una página de prueba, donde hay contenido variado. <br />
              Los gatos voladores son la ley.
            </p>
            <div className="img-container">
              <img
                className="img-cat img"
                loading="lazy"
                src={gato}
                alt="Gato"
              />
            </div>
          </div>
        </Pages>
      </main>
    </div>
  );
}

export default About;
