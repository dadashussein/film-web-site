import { useContext } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetchTrendMovies from "../../api/fetchTrend";
import { LanguageContext } from "../../context/LanguageProvider";
import { dateFix, circleColor } from "../../service/uiFunctions";
import { motion } from "framer-motion";

const TrendMovie = () => {
  const { language } = useContext(LanguageContext);
  const fetcher = (language) => fetchTrendMovies(language);
  const { data, error } = useSWR(language, fetcher);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section>
      <h1 className="text-center text-lg md:text-2xl lg:text-4xl mt-2">
        {language === "en-US" ? "It's trending now" : "Şimdi trendde"}
      </h1>
      <div className="p-4 grid grid-cols-1 place-items-center md:place-items-stretch md:flex md:gap-4 md:flex-wrap md:justify-center">
        {data.results.slice(0, 10).map((movie) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 290,
              damping: 30,
            }}
            className="w-64 flex md:flex-col md:w-64 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={movie.id}
          >
            <img
              className="w-32 md:w-64 rounded-l-md md:rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-2 md:p-5 flex flex-col">
              <h3 className="mb-2 text-ms md:h-14 md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h3>
              <p className="mb-1 md:mb-3 text-xs md:text-sm lg:text-lg font-normal text-gray-500 dark:text-gray-400">
                Relase Date: {dateFix(movie.release_date)}
              </p>
              <div className="mb-3 text-xs md:text-sm lg:text-lg font-normal flex items-center gap-2 text-gray-700 dark:text-gray-400">
                IMDB:
                <div className="w-8 my-2">
                  <svg
                    className="circle-chart"
                    viewBox="0 0 33.83098862 33.83098862"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="circle-chart-background"
                      stroke="transparent"
                      strokeWidth="2"
                      fill="none"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    />
                    <circle
                      className="circle-chart-circle"
                      stroke={circleColor((movie.vote_average * 10).toFixed(0))}
                      strokeWidth="2.9"
                      strokeLinecap="round"
                      fill="rgba(0,0,0,0.4)"
                      transform="rotate(-90 16.9 16.9)"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                      style={{
                        strokeDasharray: `${(movie.vote_average * 10).toFixed(
                          0
                        )}, 100`,
                      }}
                    />
                    <text
                      className="circle-chart-percent"
                      x="18"
                      y="20"
                      fontSize=".7em"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                    >
                      {(movie.vote_average * 10).toFixed(0)}%
                    </text>
                  </svg>
                </div>
              </div>
              <Link
                className="inline-flex  items-center px-3 py-2 text-xs md:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                to={`/more/${movie.id}`}
              >
                Read More
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 ml-2 -mr-1"
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
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendMovie;
