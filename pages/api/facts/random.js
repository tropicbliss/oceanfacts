import { facts } from "../../../facts";

export default function handler(req, res) {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  res.status(200).json(fact);
}
