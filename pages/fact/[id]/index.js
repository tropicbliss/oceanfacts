import { facts as rawFacts } from "../../../facts";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const fact = ({ fact }) => {
  return (
    <div className="p-3 mt-20">
      <div className="mb-3 grid grid-cols-2 gap-3">
        {fact.picture.map((p, i) => (
          <Image
            className="rounded"
            src={p}
            alt="Picture of stuff you'll probably find in an ocean"
            width={500}
            height={500}
            priority={i == 0}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            key={i}
          />
        ))}
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {fact.fact}
      </p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const fact = rawFacts[context.params.id];
  return {
    props: {
      fact,
    },
  };
};

export const getStaticPaths = async () => {
  const facts = rawFacts.map((e, i) => {
    return { ...e, id: i };
  });
  const ids = facts.map((fact) => fact.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default fact;
