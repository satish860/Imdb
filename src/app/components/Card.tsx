import React from 'react'

function Card({result}:any) {
  return (
    <div  className="flex justify-center ml-4 mt-2">
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2 line-clamp-1">
          {result.title || result.name}
        </h5>
        <p className="text-gray-700 text-base mb-4 line-clamp-3 font-semibold">
          {result.overview}
        </p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {result.vote_count}
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card