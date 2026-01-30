import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "text-green-400 text-sm font-medium tracking-widest uppercase seq",
  SKILL_CONTAINER: "flex items-center py-6 border-b border-gray-800",
  SKILL_ICONS: "flex flex-wrap gap-4 ml-8",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

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
        {skills.map((skill) => (
          <div
            key={skill}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-green-400 p-1 flex items-center justify-center bg-black hover:scale-110 transition-transform duration-200"
          >
            <Image
              src={`/skills/${skill}.svg`}
              alt={skill}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative bg-black">
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
