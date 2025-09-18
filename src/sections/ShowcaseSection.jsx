import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);

  useGSAP(() => {
    const projects = [
      projectRef1.current,
      projectRef2.current,
      projectRef3.current,
    ];

    projects.map((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  });

  return (
    <section ref={sectionRef} id="work " className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={projectRef1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="linkedin-clone" />
            </div>
            <div className="text-content">
              <h2>project description</h2>
            </div>
          </div>
          {/* right */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={projectRef2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="x-clones" />
              </div>
              <div className="text-content">
                <h2>project description</h2>
              </div>
            </div>

            <div className="project" ref={projectRef3}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="x-clones" />
              </div>
              <div className="text-content">
                <h2>project description</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
