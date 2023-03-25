const fetchSuggestions = async (query, language) => {
  if (!query) return [];
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );

  const data = await response.json();
  return data.results.map((result) => result.title);
};

export default fetchSuggestions;
