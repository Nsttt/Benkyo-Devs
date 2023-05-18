import Card from "../../components/card/Card";

const DetailCard = ({ datos }) => {
  console.log(datos);
  return (
    // <h1>holasss hooyyyy</h1>
    <ul>
      <h1>Card</h1>
      {datos &&
        datos.easy.map((datos) => {
          return (
            <li key={datos.id}>
              <Card dato={datos} />;
            </li>
          );
        })}
    </ul>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:4000/`);
  const datos = await res.json();

  console.log(datos);

  return { props: { datos } };
}
export default DetailCard;
