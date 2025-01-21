import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <img src="assets/logoSurf.svg" alt="logo" />

      <ul>
        <li>
          <Link href={"/camp"}>the camp//.</Link>
        </li>
        <li>
          <Link href={"/camp"}>the experience.</Link>
        </li>
        <li>
          <Link href={"/camp"}>the blog.</Link>
        </li>
      </ul>
    </header>
  );
}
