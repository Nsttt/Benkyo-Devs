const IndexPruebas = ({ datos }) => {
  console.log(datos.faciles);
  return (
    // <h1>holasss hooyyyy</h1>
    <ul>
      <h1>Servidor</h1>
      {datos &&
        datos.faciles.map((dato, index) => {
          return (
            <li key={index}>
              <h2>{dato.pregunta}</h2>
              <h2>{dato.id}</h2>
              <h2>{dato.opciones}</h2>
              <h2>{dato.respuesta}</h2>
            </li>
          );
        })}
    </ul>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.REACT_APP_API}`);
  const datos = await res.json();

  console.log(datos);

  return { props: { datos } };
}
export default IndexPruebas;
