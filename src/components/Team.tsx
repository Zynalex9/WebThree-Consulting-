import { useEffect, useRef } from "react";
import gsap from "gsap";

const Team = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      const img = imgRefs.current[index];

      if (img) {
        gsap.set(img, { x: -50, opacity: 0 });
      }

      const handleMouseEnter = () => {
        if (img) {
          gsap.to(img, {
            x: 600,
            opacity: 1,
            duration: 4,
            ease: "power3.out",
          });
        }
      };

      const handleMouseLeave = () => {
        if (img) {
          gsap.to(img, {
            x: -50,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
          });
        }
      };

      if (container) {
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (container) {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    });
  }, []); 

  const renderMember = (
    name: string,
    title: string,
    index: number,
    img: string
  ) => (
    <div
      className="member flex w-full justify-between items-center p-12 border relative"
      ref={(el) => (containerRefs.current[index] = el)}
      key={index}
    >
      <img
        src={img}
        className="absolute h-44 rounded-full opacity-0 transition-opacity"
        alt="team member"
        ref={(el) => (imgRefs.current[index] = el)}
      />
      <h1 className="font-Thunder text-8xl">
        <span className="text-main-green">/</span>
        {name}
      </h1>
      <h3>
        <span className="text-main-green">/</span>
        {title}
      </h3>
    </div>
  );

  return (
    <div className="border-b" id="team">
    <div className="min-h-screen md:px-24">
      <div className="section-1 h-[50vh] flex items-center justify-center border">
        <h1 className="font-Thunder text-9xl">MEET THE TEAM</h1>
      </div>
      <div className="members">
        {renderMember(
          "MR_HMM",
          "CEO & CO-FOUNDER",
          0,
          "https://cdn.prod.website-files.com/625416e0a64e0c6895f79107/62594ce518a5ce541167278b_ziggy-pp%20(1).jpg"
        )}
        {renderMember(
          "JOHN_DOE",
          "CTO",
          1,
          "https://cdn.prod.website-files.com/625416e0a64e0c6895f79107/63e038e96af00b17415e1b9a_Bored_Ape_Yacht_Club_BoredApeYachtClub_5458.png"
        )}
        {renderMember(
          "JANE_DOE",
          "COO",
          2,
          "https://cdn.prod.website-files.com/625416e0a64e0c6895f79107/6532733bcaf2102b4a31748b_Start.png"
        )}
        {renderMember(
          "DEV_TEAM",
          "Lead Developer",
          3,
          "https://cdn.prod.website-files.com/625416e0a64e0c6895f79107/62594ce7007f387cf5e68bac_zooper-dooper-pp%20(1).jpg"
        )}
      </div>
    </div>
    </div>
  );
};

export default Team;
