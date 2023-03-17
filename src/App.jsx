import { SWRConfig } from "swr";
import MovieSearch from "./components/MovieSearch";
import SingleMovie from "./components/SingleMovie";
import TrendMovie from "./components/TrendMovie";

function App() {
  return (
    <div>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          errorRetryCount: 2,
          refreshInterval: 0,
        }}
      >
        <TrendMovie />
        <MovieSearch />
        <SingleMovie />
      </SWRConfig>
    </div>
  );
}

export default App;
