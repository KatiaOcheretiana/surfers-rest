import Link from "next/link";
import { LogoIcon } from "../Icons";

export default function Footer() {
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
    {
      display: "the events.",
      slug: "/events",
    },
  ];

  const policyList = [
    {
      display: "Imprint",
      slug: "/imprint",
    },
    {
      display: "Terms and Conditions",
      slug: "/terms",
    },
    {
      display: "Data Protection",
      slug: "/protection",
    },
  ];

  return (
    <footer className="footer">
      <nav className="footer__block">
        <LogoIcon classname="footer__logo" />
        <ul className="footer__nav">
          {navItems.map((el, index) => (
            <li key={index}>
              <Link href={el.slug}>
                <h5>{el.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__block">
        <ul className="footer__policy-list">
          {policyList.map((el, index) => (
            <li key={index}>
              <Link href={el.slug}>
                <p>{el.display}</p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="footer__rules">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}
