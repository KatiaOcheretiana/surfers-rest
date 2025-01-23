import HeroSection from "./_components/HeroSection";
import image from "../public/assets/home.png";

export default function Home() {
  return (
    <main>
      <HeroSection
        theme="turquoise"
        image={image}
        title="barrel. your. happiness."
      />
    </main>
  );
}
