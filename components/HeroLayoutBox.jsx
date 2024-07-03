import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function HeroLayoutBox() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ItemList = [
    {"text":"Pre-built Templates."},
    {"text":"Pre-built Templates."},
    {"text":"Bring your LLM"},
    {"text":"Bring your LLM"},
    {"text":"Tool Calls"}
  ]
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const position = window.scrollY;
      // Update the state with the new scroll position
      setScrollPosition(position);
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero-slider-layout">
      <div
        className="scroller-view"
        style={{
          willChange: "transform",
          transform: `translate3d(-${
            scrollPosition * 0.1
          }rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease-out",
        }}
      >
        <Card id="build" title="Build" subtitle="Easily Build Complex Workflows" contentItem={ItemList} />
        <Card id="build" title="Test" subtitle="Easily Build Complex Workflows" contentItem={ItemList} />
        <Card id="build" title="Deploy" subtitle="Easily Build Complex Workflows" contentItem={ItemList} />
        <Card id="build" title="Monitor" subtitle="Easily Build Complex Workflows" contentItem={ItemList} />
      </div>
    </div>
  );
}
