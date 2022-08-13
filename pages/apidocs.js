import Link from "next/link";

const apidocs = () => {
  return (
    <div className="p-3 mt-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="/api/facts" target="_blank" rel="noreferrer">
          GET /api/facts
        </a>
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Description: Returns all the ocean facts.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Responses
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        200: Successfully got ocean facts.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="/api/facts/0" target="_blank" rel="noreferrer">
          GET /api/facts/[id]
        </a>
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Description: Returns an ocean fact that corresponds to an id.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Responses
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        200: Successfully got an ocean fact.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="/api/facts/random" target="_blank" rel="noreferrer">
          GET /api/facts/random
        </a>
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Description: Returns a random ocean fact.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Responses
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        200: Successfully got an ocean fact.
      </p>
    </div>
  );
};

export default apidocs;
