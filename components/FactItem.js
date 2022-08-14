import Link from "next/link";

const FactItem = ({ fact }) => {
  return (
    <Link href="/fact/[id]" as={`/fact/${fact.id}`}>
      <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {fact.fact}
        </p>
      </a>
    </Link>
  );
};

export default FactItem;
