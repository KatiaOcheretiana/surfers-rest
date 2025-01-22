import Link from "next/link";
import React from "react";
import { LogoIcon } from "../Icons";

export default function Header() {
  const navItems = [
    {
      display: "the camp.",
      slug: "/",
    },
    {
      display: "the experience.",
      slug: "/experience",
    },
    {
      display: "the blog.",
      slug: "/blog",
    },
  ];

  return (
    <header className="header">
      <LogoIcon classname="header__logo" />

      <ul className="header__nav">
        {navItems.map((el, index) => (
          <li key={index}>
            <Link href={el.slug}>
              <h5>{el.display}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={"/events"} className="btn btn--black btn--small">
        BOOK NOW
      </Link>
    </header>
  );
}
