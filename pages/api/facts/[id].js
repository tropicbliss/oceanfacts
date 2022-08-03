import { facts } from "../../../facts";

export default function handler({ query: { id } }, res) {
  const fact = facts[id];
  if (fact) {
    res.status(200).json(fact);
  } else {
    res.status(404).json({ message: `Fact with the id of ${id} is not found` });
  }
}
