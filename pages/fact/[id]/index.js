import { facts as rawFacts } from "../../../facts";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import FeedbackModal from "../../../components/FeedbackModal";

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

const Fact = ({ fact, totalLength }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const nextId = +id + 1;

  return (
    <div className="p-3 mt-20">
      <div className="mb-3 grid grid-cols-2 gap-3">
        {fact.picture.map((p, i) => (
          <Image
            className="rounded-lg"
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
      <div className="flex flex-row-reverse space-x-3 space-x-reverse">
        <div hidden={nextId === totalLength}>
          <Link href={`/fact/${nextId}`}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Goes to the next fact</span>
            </button>
          </Link>
        </div>
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Feedback
        </button>
      </div>
      <FeedbackModal
        showModal={showModal}
        factID={id}
        onClick={() => setShowModal(!showModal)}
      />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const fact = rawFacts[context.params.id];
  const totalLength = rawFacts.length;
  return {
    props: {
      fact,
      totalLength,
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

export default Fact;
