import React from "react";
import HeroSection from "../_components/HeroSection";
import image from "../../public/assets/camp.png";

export default function page() {
  return (
    <main>
      <HeroSection
        theme="orange"
        image={image}
        title="discover. your. spirit."
      />
    </main>
  );
}
