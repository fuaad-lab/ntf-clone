import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atom/Atom";
import ReactPlayer from "react-player";
import {
  FaPause,
  FaPlay,
  FaPlus,
  FaThumbsUp,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MovieModal = () => {
  const [showModel, setShowModel] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [key, setKey] = useState("");
  const [isPlay, setIsPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [genres, setGenres] = useState([]);

  const handleClose = () => {
    setShowModel(false);
    setMovie(null);
  };
  useEffect(() => {
    const fatchMovieTrail = async () => {
      if (!movie?.id) return;
      // console.log(movie.title)
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&append_to_response=videos`
      );
      setGenres(data?.genres);
      console.log("data:", data);
      setKey(data?.videos.results[0].key);
    };
    console.log("movie", movie);
    fatchMovieTrail();
  }, [movie]);
  return (
    <Modal
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-y-scroll rounded-md scrollbar-hide"
      open={showModel}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <button
          className="modalButton modal-btn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="relative pt-[56.24%]">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${key}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            playing={isPlay}
            muted={isMuted}
          />
          {/* url={https://www.youtube.com/watch?v=y8l8hUTYJnA} /> */}
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2 ">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                {isPlay ? (
                  <FaPause
                    onClick={() => setIsPlay(false)}
                    className="h-6 w-6 text-black"
                  />
                ) : (
                  <FaPlay
                    onClick={() => setIsPlay(true)}
                    className="h-6 w-6 text-black"
                  />
                )}
              </button>
              <button className="cursor-pointer hover:bg-white/10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray bg-[#2a2a2a] transition hover:border-white">
                <FaPlus className="h-6 w-6  " />
              </button>
              <button className="modal-btn cursor-pointer">
                <FaThumbsUp className="h-8 w-8" />
              </button>
            </div>
            <div>
              {isMuted ? (
                <FaVolumeMute
                  onClick={() => setIsMuted(false)}
                  className="h-10 w-10 "
                />
              ) : (
                <FaVolumeUp
                  onClick={() => setIsMuted(true)}
                  className="h-10 w-10 "
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10} % Match
              </p>
              <p className="font-light ">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded  border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-4 font-light">
            <p className="w-5/6">{movie?.overview}</p>
            <div className="flex flex-col space-y-3 text-sm">
              <div>
                <span className="text-gray-400">Genres : </span>
                {genres.map((genre) => genre.name).join(", ")}
              </div>
              <div className="">
                <span className="text-gray-400">Original Language : </span>
                {movie?.original_language}
              </div>
              <div className="">
                <span className="text-gray-400">Total Votes : </span>
                {movie?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default MovieModal;
