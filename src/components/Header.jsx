import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/cinema.png";
import LanguageSwitcher from "./switchers/LanguageSwitcher";
import useSWR from "swr";
import ModeSwitcher from "./switchers/ModeSwitcher";
import fetchSuggestions from "../api/fetchSuggestions";

const Header = () => {
  const [query, setQuery] = useState("");
  const fetcher = (query) => fetchSuggestions(query);
  const { data: titles } = useSWR(query, fetcher);

  return (
    <header>
      <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex ">
            <img className="w-10 h-10  " src={Logo} alt="" />
          </Link>

          <div className="flex items-center lg:order-2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-zinc-200 border w-24 md:w-full  border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block  pl-2 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {/* SUGGESTIONS CODE START  */}
                <div>
                  {query && titles && (
                    <div className="absolute overflow-y-hidden	 max-h-64 z-50 w-52 mt-1 bg-white rounded-lg shadow-lg">
                      <ul className="divide-y divide-gray-200">
                        {titles.map((title, id) => (
                          <li key={id}>
                            <Link
                              to={`search/${query}`}
                              onClick={() => setQuery("")}
                              className="block px-3 py-2 text-sm leading-5 text-gray-900 cursor-pointer hover:bg-gray-100"
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* SUGGESTIONS CODE END  */}
              </div>

              <Link
                className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
                to={query.trim() !== "" ? `search/${query}` : "#"}
                onClick={(e) => query.trim() === "" && e.preventDefault()}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </Link>
            </form>
            <LanguageSwitcher />
            <ModeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
