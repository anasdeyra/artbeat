import React from "react";
import About from "../components/pages/landingpage/About";
import Hero from "../components/pages/landingpage/Hero";
import RecentArtwork from "../components/pages/landingpage/RecentArtwork";

export default function Landingpage() {
  return (
    <>
      <Hero />
      <RecentArtwork />
      <About />
    </>
  );
}
