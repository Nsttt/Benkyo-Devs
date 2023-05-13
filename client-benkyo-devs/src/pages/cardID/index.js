import Card from "carol-88/components/card/Card";

const DetailCard = ({ datos }) => {
  console.log(datos);
  return (
    // <h1>holasss hooyyyy</h1>
    <ul>
      <h1>Card</h1>
      {datos &&
        datos.easy.map((dato) => {
          return (
            <li key={dato.id}>
              <Card dato={dato} />;
            </li>
          );
        })}
    </ul>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.REACT_APP_API}`);
  const datos = await res.json();

  console.log(datos);

  return { props: { datos } };
}
export default DetailCard;
