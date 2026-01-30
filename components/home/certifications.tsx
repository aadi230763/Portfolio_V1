import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IDesktop } from "pages";

const CERTIFICATION_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-12 justify-center",
  CAROUSEL_CONTAINER: "relative mt-8 px-4 md:px-0",
  CARD: "bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 max-w-md mx-auto",
  IMAGE_CONTAINER: "w-full h-48 bg-gray-700 flex items-center justify-center",
  CONTENT: "p-6",
  NAV_BUTTON:
    "absolute top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all duration-200 cursor-pointer z-10 backdrop-blur-sm border border-gray-700",
};

// Placeholder certification data
const CERTIFICATIONS = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit",
    subtitle: "Consectetur Adipiscing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    year: "2024",
    image: "/projects/Wipro.jpeg",
  },
  {
    id: 2,
    title: "Ut Enim Ad Minim Veniam",
    subtitle: "Quis Nostrud Exercitation",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: "2023",
    image: "/projects/Wipro.jpeg",
  },
  {
    id: 3,
    title: "Duis Aute Irure Dolor",
    subtitle: "Reprehenderit Voluptate",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: "2023",
    image: "/projects/Wipro.jpeg",
  },
  {
    id: 4,
    title: "Excepteur Sint Occaecat",
    subtitle: "Cupidatat Non Proident",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    year: "2022",
    image: "/projects/Wipro.jpeg",
  },
];

const CertificationsSection = ({ isDesktop }: IDesktop) => {
  const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const initRevealAnimation = (
    targetSectionRef: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSectionRef.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });
  };

  useEffect(() => {
    const revealScrollTrigger = initRevealAnimation(targetSectionRef);

    return () => {
      revealScrollTrigger && revealScrollTrigger.kill();
    };
  }, [targetSectionRef]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <h1 className="text-4xl md:text-5xl font-medium seq">
        Certifications and Achievements
      </h1>
      <div className="w-12 h-1 bg-green-400 mt-4 seq"></div>
    </div>
  );

  const renderCertificationCard = (cert: typeof CERTIFICATIONS[0]) => (
    <motion.div
      key={cert.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={CERTIFICATION_STYLES.CARD}
    >
      <div className={CERTIFICATION_STYLES.IMAGE_CONTAINER}>
        <Image
          src={cert.image}
          alt={cert.title}
          width={400}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={CERTIFICATION_STYLES.CONTENT}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400">{cert.subtitle}</p>
          </div>
          <span className="ml-4 px-3 py-1 bg-green-400 bg-opacity-20 text-green-400 text-xs font-medium rounded-full border border-green-400 border-opacity-30">
            {cert.year}
          </span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          {cert.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={targetSectionRef}
      className={CERTIFICATION_STYLES.SECTION}
      id="certifications"
    >
      <div className="inner-container">
        {renderSectionTitle()}
        <div className={CERTIFICATION_STYLES.CAROUSEL_CONTAINER}>
          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence initial={false} custom={direction}>
              {renderCertificationCard(CERTIFICATIONS[currentIndex])}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`${CERTIFICATION_STYLES.NAV_BUTTON} left-0 md:-left-16`}
              aria-label="Previous certification"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className={`${CERTIFICATION_STYLES.NAV_BUTTON} right-0 md:-right-16`}
              aria-label="Next certification"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2 seq">
            {CERTIFICATIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-400 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
