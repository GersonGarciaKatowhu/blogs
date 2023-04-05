import Pages from "../component/Pages";
function Home() {
  return (
    <>
      <main className="centerAll">
        <Pages title="Inicio">
          <div className="padding-general">
            <p>Esta es mi página de artículos y blogs</p>
          </div>
        </Pages>
      </main>
    </>
  );
}

export default Home;
