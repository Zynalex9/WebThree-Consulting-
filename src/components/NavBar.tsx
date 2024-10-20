import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        dropDownRef.current,
        { height: 0, opacity: 0 },
        { height: 200, opacity: 1, duration: 0.5 }
      );
      
      tl.fromTo(
        '.link',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1 } 
      );
    } else {
      
      gsap.to(dropDownRef.current, { height: 0, opacity: 0, duration: 0.5 });
    }
  }, [isMenuOpen]); 

  return (
    <nav className="px-6 md:px-24 w-full py-4 flex justify-between items-center border-b">
      <h1 className="font-Neue text-main-white text-3xl">WEB THREE</h1>
      <div className="hidden md:flex gap-4">
        <h2 className="text-xl"><a href="#">HOME</a></h2>
        <h2 className="text-xl"><a href="#services">SERVICES</a></h2>
        <h2 className="text-xl"><a href="#">PARTNERS</a></h2>
        <h2 className="text-xl"><a href="#">CLIENTS</a></h2>
        <h2 className="text-xl"><a href="#">CONTACT</a></h2>
      </div>
      <div className="flex items-center md:hidden">
        <FaBars
          className="text-main-green cursor-pointer text-2xl"
          onClick={toggleMenu}
        />
      </div>
      <div
        ref={dropDownRef}
        className={`absolute top-16 left-0 w-full z-10 bg-black border-b overflow-hidden`} 
      >
        <div className="flex flex-col items-center py-4 bg-black">
          <h2 className="link text-xl"><a href="#">HOME</a></h2>
          <h2 className="link text-xl"><a href="#services">SERVICES</a></h2>
          <h2 className="link text-xl"><a href="#">PARTNERS</a></h2>
          <h2 className="link text-xl"><a href="#">CLIENTS</a></h2>
          <h2 className="link text-xl"><a href="#">CONTACT</a></h2>
        </div>
      </div>
      <div className="hidden md:flex gap-6">
        <FaTwitter className="text-main-green cursor-pointer text-2xl" />
      </div>
    </nav>
  );
};

export default NavBar;
