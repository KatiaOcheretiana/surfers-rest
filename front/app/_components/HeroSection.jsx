import Link from "next/link";
import React from "react";
import { LogoIcon } from "./Icons";
import Image from "next/image";

export default function HeroSection({ theme, image, title }) {
  return (
    <section className="hero">
      <div>
        <div className="hero__image-bg-wrapper">
          <Image src={image} alt="hero image" fill priority />
        </div>

        <h1 className={`hero__title hero__title--${theme}`}>{title}</h1>
        <Link className={`btn btn--medium btn--${theme}`} href={"/events"}>
          Book now
        </Link>
      </div>
      <LogoIcon classname={`hero__icon hero__icon--${theme}`} />
    </section>
  );
}
