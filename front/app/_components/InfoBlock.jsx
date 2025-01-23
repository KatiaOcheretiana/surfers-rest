import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InfoBlock({
  theme,
  btnLink,
  btnText,
  image,
  title,
  text,
  reversed,
}) {
  return (
    <section className={`info ${reversed ? "info__reversed" : ""}`}>
      <div className="info__image-wrapper">
        <Image src={image} alt="image" />
      </div>

      <div className="info__content">
        <h2 className="info__title">{title}</h2>
        <p>{text}</p>

        <Link href={btnLink}>
          <button className={`btn btn--small btn--${theme}`}>{btnText}</button>
        </Link>
      </div>
    </section>
  );
}
