const fetchDetail = async (id, language) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch video detail");
  }
  const data = await response.json();
  return data;
};

export default fetchDetail;
