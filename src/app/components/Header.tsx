import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Menu from "./Menu";

function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex items-center justify-center">
        <Menu text="HOME" address="/" Icon={AiFillHome} />
        <Menu text="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <Link href="/">
          <span className="bg-amber-500 mx-2 rounded-lg text-xl p-2">IMDB</span>
          <span>Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
