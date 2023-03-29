import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetchDetail from "../../api/fetchMoreDetail";
import getMovieTrailer from "../../api/getMovieTrailer";
import { LanguageContext } from "../../context/LanguageProvider";
import { circleColor, dateFix, runTimeFix } from "../../service/uiFunctions";
import VideoPlayer from "../video/VideoPlayer";
const SingleMovie = () => {
  const { id } = useParams();
  const IMG_PATH = "https://image.tmdb.org/t/p/original";

  const { language } = useContext(LanguageContext);
  const { data, error } = useSWR(`/movie/${id}language=${language}`, () =>
    fetchDetail(id, language)
  );

  const [trailerKey, setTrailerKey] = useState("");
  useEffect(() => {
    async function fetchTrailer() {
      const trailer = await getMovieTrailer(id, language);
      setTrailerKey(trailer);
    }
    fetchTrailer();
  }, [id, language]);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const backgroundStyle = {
    backgroundImage: `url(${IMG_PATH + data.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const {
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    genres,
    original_language,
    runtime,
    tagline,
  } = data;

  return (
    <div style={backgroundStyle}>
      <div className=" p-4 backdrop-blur-md dark:backdrop-blur-sm   dark:text-white  bg-white/20 dark:bg-black/80">
        <p className="text-xl  text-center md:text-left md:text-4xl">{title}</p>
        <p className="text-sm mt-1 italic  dark:text-gray-100  text-center md:text-left  md:text-lg">
          {tagline}
        </p>
        <div className="flex flex-wrap text-gray-200 dark:text-gray-400   justify-center md:justify-start gap-1  md:gap-2 uppercase text-sm md:text-lg my-3 ml-4 ">
          <span>{dateFix(release_date)}</span>
          <span>{original_language}</span>
          <span>{runTimeFix(runtime)}</span>
        </div>
        <div className="flex flex-col  items-center md:items-start    md:flex-row gap-2  p-1 rounded">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="cinema"
            className="w-64 rounded shadow-lg"
          />
          <div className="ml-3">
            <div className="flex gap-1 flex-wrap justify-center items-start md:justify-start mt-4 mb-2">
              {genres?.map((genre) => {
                return (
                  <p
                    className="border border-black dark:border-white border-opacity-40 py-1 px-2 rounded-xl uppercase"
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col gap-1 p-1 ">
              <span className="text-center md:text-start">{overview}</span>

              <div className="flex gap-1 items-center">
                <div className="mb-3 text-xs   md:text-sm lg:text-lg font-normal flex items-center gap-2  ">
                  IMDB :
                  <div className="w-8 my-2 ">
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
                        stroke={circleColor((vote_average * 10).toFixed(0))}
                        strokeWidth="2.9"
                        strokeLinecap="round"
                        fill="rgba(0,0,0,0.4)"
                        transform="rotate(-90 16.9 16.9)"
                        cx="16.9"
                        cy="16.9"
                        r="15.9"
                        style={{
                          strokeDasharray: `${(vote_average * 10).toFixed(
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
                        {(vote_average * 10).toFixed(0)}%
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPlayer trailerKey={trailerKey} />
    </div>
  );
};

export default SingleMovie;
