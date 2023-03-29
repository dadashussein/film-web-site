import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import fetchSearchMovies from "../../api/fetchSearch";
import { LanguageContext } from "../../context/LanguageProvider";
import { dateFix } from "../../service/uiFunctions";
import { motion } from "framer-motion";

const MovieSearch = () => {
  const { language } = useContext(LanguageContext);
  const { query } = useParams();
  const { data, error } = useSWR(
    query ? [`/search_movies?query=${query}language=${language}`] : null,
    () => fetchSearchMovies(query, language)
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const isMobile = window.innerWidth <= 369;
  const maxLength = isMobile ? 80 : 300;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col mx-2 md:mx-8 lg:mx-16 my-4">
      <h1 className="text-center  mb-4">
        {language == "en-US"
          ? `Search Results for "${query}"`
          : `"${query}" için arama sonuçları`}
      </h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-2"
      >
        {data.results.map(
          (movie) =>
            movie.poster_path && (
              <motion.div
                variants={item}
                className=" border p-2 flex w-full gap-4 shadow border-gray-300  bg-white dark:bg-gray-800 dark:border-gray-700"
                key={movie.id}
              >
                <img
                  className="w-24 h-24 md:h-60 md:w-40 mb-2 "
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="flex flex-col">
                  <Link
                    to={`/more/${movie.id}`}
                    className="text-sm md:text-2xl md:mt-2 hover:text-blue-800 "
                  >
                    {movie.title}
                  </Link>
                  <p className="my-2 md:mb-3 text-xs md:text-sm  font-normal text-gray-500 dark:text-gray-400">
                    {`${movie.overview.substring(0, maxLength)}${
                      movie.overview.length > maxLength ? "..." : ""
                    }`}
                  </p>
                  <p className="mb-1 md:mb-3 text-xs md:text-md  font-normal text-gray-500 dark:text-gray-400">
                    Release Date: {dateFix(movie.release_date)}
                  </p>
                </div>
              </motion.div>
            )
        )}
      </motion.div>
    </div>
  );
};

export default MovieSearch;
