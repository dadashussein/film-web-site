import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };
  return (
    <div className="flex  relative">
     
      <svg
        className="absolute z-10 top-0 left-3 h-full   pointer-events-none"
        fill="currentColor"
        viewBox="0 0 20 20"
        width="22"
        height="22"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z"></path>
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z"
        ></path>
      </svg>
      <select
        onChange={handleLanguageChange}
        id="lang_switch"
        className=" relative  bg-gray-50 border ml-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
      >
        <option value="en-US">EN</option>
        <option value="tr-TR">TR</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
