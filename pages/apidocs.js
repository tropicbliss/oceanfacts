const apidocs = () => {
  return (
    <div className="p-3 mt-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        GET /api
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
        GET /api/[id]
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
    </div>
  );
};

export default apidocs;
