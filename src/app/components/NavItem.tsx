"use client"
import React from 'react'
import { useSearchParams } from "next/navigation";
import Link from 'next/link';

function NavItem({ title, address}:any) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <Link
    href={`/?genre=${address}`}
    className={`m-4 p-2 hover:text-amber-600 ${
      genre &&
      genre === address &&
      "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
    }`}
  >
    <span className="font-semibold text-xl">{title}</span>
  </Link>
  )
}

export default NavItem