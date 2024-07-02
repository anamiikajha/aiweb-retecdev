import React, { useState, useEffect } from "react";

const HorizontalLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // current scroll position
      const position = window.scrollY;
      // Update the state with the new scroll position
      setScrollPosition(position);
    };

    // Add event listener when scrolling
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="transition-block-box"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: "rgb(14, 18, 23)",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div className="tag-block-text">Build</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: "rgb(14, 18, 23)",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div className="tag-block-text">Test</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            color: "rgb(255, 255, 255)",
            willChange: "background",
            backgroundColor: "rgb(14, 18, 23)",
          }}
        >
          <div className="tag-block-text">Deploy</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            color: "rgb(255, 255, 255)",
            willChange: "background",
            backgroundColor: "rgb(14, 18, 23)",
          }}
        >
          <div className="tag-block-text">Monitor</div>
        </a>
        <div
          className="trickle"
          style={{
            willChange: "width, height",
            width: `${scrollPosition * 0.12}%`,
            transition: "width 0.2s ease-out", // Smooth transition
          }}
        />
        <div className="trickle-bg" />
      </div>
      <div className="box-block" />
    </>
  );
};

export default HorizontalLine;
