import { facts } from "../../../facts";

export default function handler(req, res) {
  res.status(200).json(facts);
}
