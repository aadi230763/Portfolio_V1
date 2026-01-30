import { MENULINKS, SKILLS, SKILL_INFO } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "text-green-400 text-sm font-medium tracking-widest uppercase seq",
  SKILL_CONTAINER: "flex items-center py-6 border-b border-gray-800",
  SKILL_ICONS: "flex items-center",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col mb-8">
      <h1 className="text-4xl md:text-5xl font-medium seq">Skills</h1>
      <div className="w-12 h-1 bg-green-400 mt-4 seq"></div>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillRow = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <div className={SKILL_STYLES.SKILL_CONTAINER}>
      <div className="w-48 flex-shrink-0">
        <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      </div>
      <div
        className={`${SKILL_STYLES.SKILL_ICONS} ${
          willChange ? "will-change-opacity" : ""
        } seq`}
      >
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="relative group"
            style={{
              marginLeft: index === 0 ? "0" : "-0.75rem",
              zIndex: skills.length - index,
            }}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-green-400 p-1 flex items-center justify-center bg-gray-900 hover:scale-125 hover:z-50 transition-all duration-200 cursor-pointer relative">
              <Image
                src={`/skills/${skill}.svg`}
                alt={skill}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            
            <AnimatePresence>
              {hoveredSkill === skill && SKILL_INFO[skill] && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none z-[100]"
                >
                  <div className="bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg min-w-max">
                    <div className="font-semibold text-sm">{SKILL_INFO[skill].name}</div>
                    <div className="text-xs text-gray-300">{SKILL_INFO[skill].role}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="flex flex-col">
            {renderSkillRow("LANGUAGES", SKILLS.languages)}
            {renderSkillRow("FRAMEWORKS & LIBRARIES", SKILLS.frameworks)}
            {renderSkillRow("TOOLS & PLATFORMS", SKILLS.tools)}
            {renderSkillRow("CLOUD & DEVOPS", SKILLS.cloud)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
