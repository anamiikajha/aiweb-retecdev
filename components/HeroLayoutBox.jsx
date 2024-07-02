import React, { useEffect, useState } from "react";

export default function HeroLayoutBox() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div className="hero-slider-layout hidden lg:block">
      <div
        className="scroller-view"
        style={{
          willChange: "transform",
          transform: `translate3d(-${
            scrollPosition * 0.1
          }rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div id="build" className="scroller-view-content">
          <div className="content-section top">
            <div className="build-title">
              <div className="frame">
                <div className="frame-text">Build</div>
                <div className="frame-subtitle-text">
                  Easily Build &nbsp;Complex Workflows.
                </div>
              </div>
              <div className="frame-content">
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Pre-built Templates.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Stateful Multi-prompt.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Single-prompt Agent.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Bring your LLM</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Tool Calls.</div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 720px"
              srcSet="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-500.png 500w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-800.png 800w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png 976w"
              alt=""
              className="frame-image"
            />
          </div>
        </div>
        <div id="test" className="scroller-view-content">
          <div className="content-section top">
            <div className="build-title">
              <div className="frame">
                <div className="frame-text">Test</div>
                <div className="frame-subtitle-text">
                  Easily Build &nbsp;Complex Workflows.
                </div>
              </div>
              <div className="frame-content">
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Pre-built Templates.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Stateful Multi-prompt.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Single-prompt Agent.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Bring your LLM</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Tool Calls.</div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 720px"
              srcSet="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-500.png 500w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-800.png 800w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png 976w"
              alt=""
              className="frame-image"
            />
          </div>
        </div>
        <div id="deploy" className="scroller-view-content">
          <div className="content-section top">
            <div className="build-title">
              <div className="frame">
                <div className="frame-text">Deploy</div>
                <div className="frame-subtitle-text">
                  Easily Build &nbsp;Complex Workflows.
                </div>
              </div>
              <div className="frame-content">
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Pre-built Templates.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Stateful Multi-prompt.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Single-prompt Agent.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Bring your LLM</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Tool Calls.</div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 720px"
              srcSet="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-500.png 500w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-800.png 800w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png 976w"
              alt=""
              className="frame-image"
            />
          </div>
        </div>
        <div id="monitor" className="scroller-view-content">
          <div className="content-section top">
            <div className="build-title">
              <div className="frame">
                <div className="frame-text">Monitor</div>
                <div className="frame-subtitle-text">
                  Easily Build &nbsp;Complex Workflows.
                </div>
              </div>
              <div className="frame-content">
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Pre-built Templates.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Stateful Multi-prompt.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Single-prompt Agent.</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Bring your LLM</div>
                </div>
                <div className="frame-content-item">
                  <img
                    src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/662f13cb036375985d15ca93_Vectors-Wrapper.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    className="icon-box"
                  />
                  <div className="frame-item-test">Tool Calls.</div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 720px"
              srcSet="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-500.png 500w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-800.png 800w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png 976w"
              alt=""
              className="frame-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
