"use client"
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";


function Navigate() {
 
  return (
    <div className="flex items-center justify-center bg-gray-500">
      <NavItem title="Trending" address="fetchTrending" />
      <NavItem title="Top Rated" address="fetchTopRated" />
    </div>
  );
}

export default Navigate;
