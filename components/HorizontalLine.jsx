import React, { useState, useEffect, useRef } from "react";

const HorizontalLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const tagRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      console.log(position)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="transition-block-box" style={{ overflow: "hidden", width: "98.5%" }}>
         <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: `${(scrollPosition<=242)?"rgb(255, 255, 255)":"rgb(14, 18, 23)"}`,
            color: `${(scrollPosition<=242)?"rgb(14, 18, 23)":"rgb(255, 255, 255)"}`,
          }}
        >
          <div className="tag-block-text">Build</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: `${(scrollPosition<=486 && scrollPosition>=242.39999389648438)?"rgb(255, 255, 255)":"rgb(14, 18, 23)"}`,
            color: `${(scrollPosition<=486 && scrollPosition>=242.39999389648438)?"rgb(14, 18, 23)":"rgb(255, 255, 255)"}`,
          }}
        >
          <div className="tag-block-text">Test</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: `${(scrollPosition<=730 && scrollPosition>=486.3999938964844)?"rgb(255, 255, 255)":"rgb(14, 18, 23)"}`,
            color: `${(scrollPosition<=730 && scrollPosition>=486.3999938964844)?"rgb(14, 18, 23)":"rgb(255, 255, 255)"}`,
          }}
        >
          <div className="tag-block-text">Deploy</div>
        </a>
        <a
          href="#"
          className="box-tag box-inline-block"
          style={{
            willChange: "background",
            backgroundColor: `${(scrollPosition>=754)?"rgb(255, 255, 255)":"rgb(14, 18, 23)"}`,
            color: `${(scrollPosition>=754)?"rgb(14, 18, 23)":"rgb(255, 255, 255)"}`,
          }}
        >
          <div className="tag-block-text">Monitor</div>
        </a>
      <div
        className="trickle"
        style={{
          willChange: "width, height",
          width: `${scrollPosition * 0.12}%`,
          transition: "width 0.2s ease-out",
        }}
      />
      <div className="trickle-bg" />
    </div>
  );
};

export default HorizontalLine;
