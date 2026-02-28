import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BASE_IMAGE_URL from "../../constants";

const Row = ({ title, url }) => {
  const [moveis, setMovies] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const rowRef = useRef(null);
  // console.log(url)

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(url);
      setMovies(data.results);

      // console.log("MOVIES:", data.results);
    };

    fetchMovie();
  }, [url]);
  const handleScroll = (direction) => {
    setIsScroll(true);
    if (rowRef.current) {
      // console.log(rowRef.current.clientWidth);
      // console.log(rowRef.current.scrollLeft);
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="h-40">
      <h2 className="text-lg font-semibold ">{title}</h2>
      <div className="group relative md:ml-2">
        <BsChevronLeft
          onClick={() => handleScroll("left")}
          className={` ${!isScroll && 'hidden'} absolute top-0 bottom-0 left-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100 `}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5  md:space-x-2.5 md:p-2 scrollbar-hide overflow-x-scroll"
        >
          {moveis &&
            moveis.map((movie) => (
              <div
                key={movie.id}
                className="relative h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] md:hover:scale-105"
              >
                <img
                  src={`${BASE_IMAGE_URL + movie.backdrop_path || movie.poster_path}`}
                  alt=""
                  className="rounded-sm object-cover "
                />
              </div>
              // console.log(movie.backdrop_path, movie.poster_path);
            ))}
        </div>
        <BsChevronRight
          onClick={() => handleScroll("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
