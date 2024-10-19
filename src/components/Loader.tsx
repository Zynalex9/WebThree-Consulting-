import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    document.body.style.overflow = "hidden";

    tl.fromTo(
      ".first",
      {
        opacity: 1,
        y: 0,
      },
      {
        y: -40,
        opacity: 0,
        duration: 2,
      }
    )
    .fromTo(
      ".green",
      {
        width: 0,
      },
      {
        width: "208px",
        duration: 1,
      }
    )
    .fromTo(
      ".green",
      {
        x: 0,
      },
      { x: "-1100%", duration: 1 }
    )
    .to(".loader", {
      height: 0,
      duration: 1,
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen flex items-center justify-between px-24 z-50 bg-black">
      <div className="flex items-center justify-center h-full w-full">
        <h1 className="first font-Thunder text-main-white text-8xl">WEB THREE</h1>
      </div>
      <div className="green h-full bg-main-green"></div>
    </div>
  );
};

export default Loader;
