import Link from "next/link";
import React from "react";

function Navigate() {
  return (
    <div className="flex items-center justify-center bg-gray-500">
      <Link href="/" className="m-4 p-2 hover:text-amber-600">
        <span className="font-semibold text-xl">Trending</span>
      </Link>
      <Link href="/" className="m-4 p-2 hover:text-amber-600">
        <span className="font-semibold text-xl">Top Rating</span>
      </Link>
    </div>
  );
}

export default Navigate;
