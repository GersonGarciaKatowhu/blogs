import Pages from "../component/Pages";
function Home() {
  const contents = (
    <div className="padding-general">
      <p>parrafo</p>
    </div>
  );
  return (
    <>
      <main className="centerAll">
        <Pages contents={contents} title="Inicio" />
      </main>
    </>
  );
}

export default Home;
