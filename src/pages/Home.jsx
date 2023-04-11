import Pages from "../component/Pages";
import Header from "../component/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <Pages title="Inicio">
          <div className="padding-general">
            <p>Esta es mi página de artículos y blogs</p>
          </div>
        </Pages>
    </>
  );
}

export default Home;
