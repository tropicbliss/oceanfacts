import FactList from "../components/FactList";
import { facts as rawFacts } from "../facts";

export default function Home({ facts }) {
  return (
    <div className="p-3 mt-20">
      <FactList facts={facts}></FactList>
    </div>
  );
}

export const getStaticProps = async () => {
  const facts = rawFacts
    .map((e) => e.fact)
    .map((f, i) => {
      return { fact: f, id: i };
    });
  return {
    props: {
      facts,
    },
  };
};
