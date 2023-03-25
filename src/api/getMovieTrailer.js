const getMovieTrailer = async (movieId, language) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch video trailer");
  }
  const data = await response.json();
  return data.results[0];
};

export default getMovieTrailer;
