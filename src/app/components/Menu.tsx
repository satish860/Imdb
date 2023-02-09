import Link from "next/link";
import React from "react";

function Menu({ text, address, Icon }: any): JSX.Element {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden mx-4" />
      <span className="hidden sm:inline my-2 text-sm">{text}</span>
    </Link>
  );
}

export default Menu;
