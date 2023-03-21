const fetchTrendMovies = async (language) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch trend movies");
  }
  const data = await response.json();
  return data;
};

export default fetchTrendMovies;
