import { server } from "../../../config";
import Image from "next/image";
import { useState } from "react";

const fact = ({ fact }) => {
  const [isGallery, setGallery] = useState(false);

  const toggleGallery = (title) => {
    if (title === "Gallery" && !isGallery) {
      setGallery(true);
    }
    if (title === "Description" && isGallery) {
      setGallery(false);
    }
  };

  const tab = (title, isSelected, disabled) => {
    const selectedclassName =
      "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
    const deselectedclassName =
      "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";
    return (
      <>
        {disabled ? (
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            {title}
          </a>
        ) : (
          <button
            href="#"
            className={isSelected ? selectedclassName : deselectedclassName}
            onClick={() => toggleGallery(title)}
          >
            {title}
          </button>
        )}
      </>
    );
  };

  const gallery = () => {
    return (
      <div id="default-carousel" className="relative" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {fact.picture.map((p) => (
            <div
              className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
              data-carousel-item=""
              key={p}
            >
              <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                Loading...
              </span>
              <Image src={p} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {fact.picture.map((_, i) => (
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label={`Slide ${i + 1}`}
              data-carousel-slide-to={i}
              key={i}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="p-3 mt-20">
      <ul className="mb-3 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">{tab("Description", !isGallery, false)}</li>
        <li>{tab("Gallery", isGallery, fact.picture.length === 0)}</li>
      </ul>
      {isGallery ? (
        gallery()
      ) : (
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {fact.fact}
        </p>
      )}
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/facts/${context.params.id}`);
  const fact = await res.json();
  return {
    props: {
      fact,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/facts`);
  const rawFacts = await res.json();
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
