import FactItem from "./FactItem";

const FactList = ({ facts }) => {
  return (
    <div className="flex flex-col space-y-3">
      {facts.map((fact) => (
        <FactItem fact={fact} key={fact.id} />
      ))}
    </div>
  );
};

export default FactList;
