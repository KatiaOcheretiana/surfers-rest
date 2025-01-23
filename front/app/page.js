import HeroSection from "./_components/HeroSection";
import image from "../public/assets/home.png";
import InfoBlock from "./_components/InfoBlock";

export default function Home() {
  return (
    <main>
      <HeroSection
        theme="turquoise"
        image={image}
        title="barrel. your. happiness."
      />

      <InfoBlock
        theme="turquoise"
        btnText="book now"
        btnLink="/events"
        image={image}
        title="the experience."
        text="At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike."
      />

      <InfoBlock
        theme="orange"
        btnText="book now"
        btnLink="/events"
        image={image}
        title="the experience."
        text="At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike."
        reversed
      />
    </main>
  );
}
