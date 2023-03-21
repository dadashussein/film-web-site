import { SWRConfig } from "swr";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieSearch from "./components/pages/MovieSearch";
import SingleMovie from "./components/pages/SingleMovie";
import TrendMovie from "./components/pages/TrendMovie";
import { LanguageProvider } from "./context/LanguageProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-zinc-200 text-black dark:text-white dark:bg-gray-900">
      <LanguageProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            shouldRetryOnError: false,
            errorRetryCount: 2,
            refreshInterval: 0,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<TrendMovie />} />

            <Route path="/search/:query" element={<MovieSearch />} />

            <Route path="/more/:id" element={<SingleMovie />} />
          </Routes>
          <Footer />
        </SWRConfig>
      </LanguageProvider>
    </div>
  );
}

export default App;
