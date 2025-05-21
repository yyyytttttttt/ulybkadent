'use client'
import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import data from '../components/data/searchIndex.json'; // Скорректированный путь к файлу JSON
import Link from 'next/link';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  // Создаем экземпляр Fuse с конфигурацией для поиска по названиям страниц
  const fuse = new Fuse(data, {
    keys: ['title'], // Поиск по названию страницы
    threshold: 0.4 // Порог для нечёткого поиска (чем меньше, тем точнее)
  });

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 1) {
      const fuseResults = fuse.search(value);
      setResults(fuseResults.map(result => result.item));
    } else {
      setResults([]);
    }
  };

  // Обработчик клика вне области поиска
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setResults([]);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);

  // Обработчик клика на иконку
  const handleIconClick = () => {
    if (results.length > 0) {
      window.location.href = results[0].path;
    }
  };

  return (
    <div ref={searchRef} className="relative flex items-center w-full">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Поиск"
        className="w-full py-[1.5%] px-[4%] rounded-t-[17px] bg-[#E8E2CF] focus:outline-none text-[#1F3475] text-16px-11px"
      />
      <button
        type="button"
        onClick={handleIconClick}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[7%] xs:w-[3%]"
      >
        <svg className='w-full h-auto'
          width="24"
          height="24"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0703 53L41.3146 46.2443M41.3146 46.2443C42.4702 45.0887 43.3869 43.7168 44.0123 42.207C44.6377 40.6971 44.9596 39.0789 44.9596 37.4446C44.9596 35.8104 44.6377 34.1921 44.0123 32.6823C43.3869 31.1724 42.4702 29.8005 41.3146 28.6449C40.159 27.4894 38.7871 26.5727 37.2773 25.9473C35.7674 25.3219 34.1492 25 32.5149 25C30.8807 25 29.2624 25.3219 27.7526 25.9473C26.2427 26.5727 24.8708 27.4894 23.7153 28.6449C21.3814 30.9788 20.0703 34.1441 20.0703 37.4446C20.0703 40.7451 21.3814 43.9105 23.7153 46.2443C26.0491 48.5781 29.2144 49.8892 32.5149 49.8892C35.8155 49.8892 38.9808 48.5781 41.3146 46.2443Z"
            stroke="#1F3475"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-[#E8E2CF] text-16px-11px font-sfLight border rounded-b-lg shadow-lg z-10">
          {results.slice(0, 5).map((result) => (
            <li key={result.id} className="border-b last:border-b-0">
              <Link
                href={result.path}
                className="block p-3 hover:bg-blue-100 hover:text-blue-500 px-[4%]"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
