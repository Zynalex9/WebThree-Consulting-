import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(".textanimate", { opacity: 0 });

    tl.fromTo(
      ".textanimate",
      { opacity: 0, y: 50 }, // Starting state
      { opacity: 1, duration: 1.3, delay: 4, y: 0, ease: "power1.inOut" }
    );

    // Eye-ball animation
    tl.fromTo(
      ".eye-ball",
      {
        transform: "matrix(17.037,0,0,17.037,5000,1928)",
      },
      {
        transform: "matrix(17.037,0,0,17.037,3500,1928)",
        duration: 1,
      }
    );
    tl.to(".eye-ball", {
      transform: "matrix(17.037,0,0,17.037,5000,1928)",
      duration: 0.5,
    });

    // NFT animation
    tl.fromTo(
      ".NFT",
      { opacity: 0.4 },
      { opacity: 1, duration: 1, repeat: -1, yoyo: true }
    );
  }, []);
  return (
    <>
      <section className="w-full px-6 md:px-24 h-[65vh] flex justify-center items-center flex-col border-b overflow-hidden">
        <div className="w-full max-w-[90vw] mx-auto border-l border-r pl-4">
          <div className="flex w-full items-center justify-center pt-4">
            <h1 className="textanimate font-Thunder text-6xl md:text-[200px] flex items-center">
              WE HELP
              <span className="NFT text-main-green ml-2 opacity-100">NFT</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10000 4160"
              preserveAspectRatio="xMidYMid meet"
              className="w-[80px] h-[80px] md:w-[350px] md:h-[250px] inline-block ml-4"
            >
              <defs>
                <clipPath id="clipPath">
                  <rect width="10000" height="4160" />
                </clipPath>
                <g id="svgElement">
                  <g
                    className="svg-transform"
                    transform="matrix(17.037,0,0,17.037,5000,1928)"
                    opacity="1"
                  >
                    <path
                      fill="rgb(220,220,220)"
                      fillOpacity="1"
                      d="M0,-105 C121.50299835205078,-105 220,0 220,0 C220,0 121.50299835205078,105 0,105 C-121.50299835205078,105 -220,0 -220,0 C-220,0 -121.50299835205078,-105 0,-105z"
                    ></path>
                  </g>
                </g>
                <mask id="maskElement" mask-type="alpha">
                  <use xlinkHref="#svgElement"></use>
                </mask>
              </defs>

              <g clipPath="url(#clipPath)">
                <g
                  className="svg-transform"
                  transform="matrix(17.037,0,0,17.037,5000,1928)"
                  opacity="1"
                >
                  <path
                    fill="rgb(220,220,220)"
                    fillOpacity="1"
                    d="M0,-105 C121.50299835205078,-105 220,0 220,0 C220,0 121.50299835205078,105 0,105 C-121.50299835205078,105 -220,0 -220,0 C-220,0 -121.50299835205078,-105 0,-105z"
                  ></path>
                </g>
                <g mask="url(#maskElement)">
                  <g
                    className="eye-ball"
                    transform="matrix(17.037,0,0,17.037,5000,1928)"
                    opacity="1"
                  >
                    <path
                      fill="rgb(149,255,0)"
                      d="M0,-47 C25.957,-47 47,-25.957 47,0 C47,25.957 25.957,47 0,47 C-25.957,47 -47,25.957 -47,0 C-47,-25.957 -25.957,-47 0,-47z"
                    />
                    <path
                      fill="rgb(255,255,255)"
                      d="M32,-52.826 C42.806,-52.826 51.565,-44.067 51.565,-33.261 C51.565,-22.455 42.806,-13.696 32,-13.696 C21.194,-13.696 12.435,-22.455 12.435,-33.261 C12.435,-44.067 21.194,-52.826 32,-52.826z"
                    />
                    <path
                      fill="rgb(255,255,255)"
                      d="M22.75,-5.625 C27.072,-5.625 30.576,-2.121 30.576,2.201 C30.576,6.523 27.072,10.027 22.75,10.027 C18.428,10.027 14.924,6.523 14.924,2.201 C14.924,-2.121 18.428,-5.625 22.75,-5.625z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h1 className="textanimate font-Thunder font-normal text-6xl md:text-[190px] text-wrap uppercase ">
            PROJECTS launch.
          </h1>
        </div>
      </section>
      <section className="w-full px-6 py-4 md:px-24 flex justify-between items-center border-b  mb-10">
        <div className="left">
          <h1 className="text-md text-main-white">
            <span className="text-main-green">/</span> BASED IN UNITED STATES{" "}
            <br /> & WORKING WORLDWIDE
          </h1>
        </div>
        <div className="middle">
          <h1 className="text-md text-main-white">
            <span className="text-main-green">/</span> YEARS OF BLOCK <br />{" "}
            CHAIN EXPERIENCE
          </h1>
        </div>
        <div className="right">
          <h1 className="text-md text-main-white">
            <span className="text-main-green">/</span> ©2022 WEBTHREE <br /> ALL
            RIGHTS RESERVED
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
