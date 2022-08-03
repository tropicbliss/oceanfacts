import FactList from "../components/FactList";
import { server } from "../config";

export default function Home({ facts }) {
  return (
    <div className="p-3 mt-20">
      <FactList facts={facts}></FactList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/facts`);
  const rawFacts = await res.json();
  const facts = rawFacts.map((e, i) => {
    return { ...e, id: i };
  });
  return {
    props: {
      facts,
    },
  };
};
