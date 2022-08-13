import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ocean Facts",
  keywords: "ocean, fish, facts, api",
  description: "Get the latest ocean facts",
};

export default Meta;
