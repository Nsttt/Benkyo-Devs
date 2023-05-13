import { useRouter } from "next/router";
import CardId from "carol-88/components/card/CardId";
const DetailCardID = ({ datos }) => {
  console.log(datos);

  return (
    <>
      <CardId datos={datos} />
    </>
  );
};

export async function getServerSideProps({ query: { id } }) {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:4000/card/${id}`);
  const datos = await res.json();

  console.log(datos);

  return { props: { datos } };
}

export default DetailCardID;
