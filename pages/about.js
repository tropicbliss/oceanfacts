const about = () => {
  return (
    <div className="p-3 mt-20">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Why did you make this?
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Idk, I just wanted to practice Next.js I guess.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        How did you do this?
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        The chat messages from Atricord were extracted using{" "}
        <a
          className="text-yellow-300 underline"
          href="https://github.com/Tyrrrz/DiscordChatExporter"
          target="_blank"
          rel="noreferrer"
        >
          Discord Chat Exporter
        </a>{" "}
        and the chat messages were filtered using a custom Python script I
        wrote.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Credits
      </h2>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Disco Fever (Disco Fever#3558) for all the facts.
        <br />
        Please do not distribute any of these facts without Disco Fever's
        permission.
      </p>
    </div>
  );
};

export default about;
