import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/cinema.png";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/trending"
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img className="w-10 h-10" src={Logo} alt="cinema" />
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://github.com/dadashussein"
                target="_blank"
                rel="noreferrer"
                className="mr-4 hover:underline md:mr-6 "
              >
                My Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dadashussein/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="https://dadash.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Dadas Huseynzada
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
