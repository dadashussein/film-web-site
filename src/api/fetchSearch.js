const fetchSearchMovies = async (query,language) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=${language}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search movies");
    }
    const data = await response.json();
    return data;
  };
  
  export default fetchSearchMovies;
  