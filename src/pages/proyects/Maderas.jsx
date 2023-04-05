import Pages from "../../component/Pages";

function Maderas() {
  return (
    <>
        <Pages dataPublication="4 de Abril del 2023" title="Tipos de maderas">
          <div className="padding-general">
            <h2 className="sub-title center">Tipos y características</h2>
            <p>
              Existen diferentes tipos de madera, cada una con características y
              usos específicos. Algunos tipos de madera comunes incluyen abeto,
              pino, haya, nogal, sapelly, cedro, arce, fresno y cerezo. Al
              elegir una madera, es importante considerar su durabilidad,
              resistencia, apariencia y costo. Por ejemplo, el nogal es una
              madera dura y resistente que se utiliza comúnmente para muebles de
              alta calidad, mientras que el pino es una madera más suave y
              económica que se utiliza para proyectos más simples. Es
              recomendable buscar asesoramiento de un experto en maderas para
              elegir la mejor opción para cada proyecto.
            </p>
            <h2 className="sub-title center">Categorías macro</h2>
            <p>
              Los diferentes tipos de madera se pueden clasificar en dos
              categorías macro: maderas blandas y maderas duras. Las maderas
              blandas suelen proceder de árboles de crecimiento rápido, perennes
              y coníferas como el pino, el álamo, el olmo, la paulonia, el abeto
              o el cedro. Las maderas duras incluyen el cerezo, el roble, el
              nogal, la caoba, entre otros.
            </p>
          </div>
        </Pages>
    </>
  );
}

export default Maderas;
