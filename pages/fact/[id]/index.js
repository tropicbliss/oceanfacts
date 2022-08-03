import { facts as rawFacts } from "../../../facts";

const fact = ({ fact }) => {
  return (
    <div className="p-3 mt-20">
      <div className="mb-3 grid grid-cols-2 gap-3">
        {fact.picture.map((p, i) => (
          <img className="rounded" src={p} key={i} />
        ))}
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {fact.fact}
      </p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const fact = rawFacts[context.params.id];
  return {
    props: {
      fact,
    },
  };
};

export const getStaticPaths = async () => {
  const facts = rawFacts.map((e, i) => {
    return { ...e, id: i };
  });
  const ids = facts.map((fact) => fact.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default fact;
