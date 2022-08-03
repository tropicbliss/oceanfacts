import Link from "next/link";

const FactItem = ({ fact }) => {
  const truncate = (str, n, useWordBoundary) => {
    if (str.length <= n) {
      return str;
    }
    const subString = str.slice(0, n - 1); // the original check
    return (
      (useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(" "))
        : subString) + "..."
    );
  };

  return (
    <Link href="/fact/[id]" as={`/fact/${fact.id}`}>
      <a className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {truncate(fact.fact, 103, " ")}
        </p>
      </a>
    </Link>
  );
};

export default FactItem;
