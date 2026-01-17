export const METADATA = {
  title: "Portfolio | Aditya Chawla",
  description:
    "Bridging complex ML models with robust application development. I design scalable, user-centric systems that turn innovative AI concepts into reliable real-world solutions.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "AI/ML Engineer",
  "App Developer",
  "System Designer",
  "Building intelligent, scalable AI-powered applications",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "#",
  github: "#",
  medium: "#",
  instagram: "#",
  facebook: "#",
  dribbble: "#",
  behance: "#",
  twitter: "#",
  topmate: "#",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Lorem ipsum dolor sit amet",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "#",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Ut labore et dolore magna",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Aliqua ut enim ad minim veniam quis nostrud exercitation",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "Ullamco laboris nisi aliquip",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Ex ea commodo consequat duis aute irure dolor reprehenderit",
    gradient: ["#245B57", "#004741"],
    url: "#",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "Voluptate velit esse cillum",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Dolore eu fugiat nulla pariatur excepteur sint occaecat 🚀",
    gradient: ["#003052", "#167187"],
    url: "#",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "Cupidatat non proident sunt",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "In culpa qui officia deserunt mollit anim id est laborum",
    gradient: ["#3A0000", "#771E1E"],
    url: "#",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Sed ut perspiciatis unde",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Omnis iste natus error sit voluptatem accusantium doloremque",
    gradient: ["#17007B", "#3A2C79"],
    url: "#",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "Laudantium totam rem aperiam",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Eaque ipsa quae ab illo inventore veritatis quasi architecto",
    gradient: ["#5E4C06", "#746528"],
    url: "#",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Beatae vitae dicta sunt",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Explicabo nemo enim ipsam voluptatem quia voluptas sit",
    gradient: ["#172839", "#334659"],
    url: "#",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Aspernatur aut odit aut fugit",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Sed quia consequuntur magni dolores eos qui ratione 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "#",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Voluptatem sequi nesciunt",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor 🚀",
    gradient: ["#470700", "#712A23"],
    url: "#",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Sit amet consectetur adipisci",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Velit sed quia non numquam eius modi tempora incidunt 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "#",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Ut labore et dolore magnam",
    image: "/projects/Wipro.jpeg",
    blurImage: "/projects/blur/Wipro.jpeg",
    description: "Aliquam quaerat voluptatem ut enim ad minima veniam",
    gradient: ["#552A04", "#614023"],
    url: "#",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "DATA SCIENTIST INTERN",
    size: ItemSize.SMALL,
    subtitle:
      "Co-engineered RAG LLM Optima using FastAPI and React 18, translating technical research into functional benchmarking features. Collaborated with the founder on technical research and code enhancements, currently transitioning to the development of the production-ready system for upcoming phases. @ AI THINKING LABS (Dec 2025 - Present, Remote)",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IOS APP DEVELOPER",
    size: ItemSize.SMALL,
    subtitle:
      "Developed high-fidelity, responsive iOS interfaces using SwiftUI and UIKit. Translated UI/UX wireframes into production code while strictly adhering to Apple Human Interface Guidelines (HIG), optimizing navigation flows for maximum accessibility and user retention. @ ACE TECHNOSYS (Dec 2025 - Jan 2025, Remote)",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SDE INTERN",
    size: ItemSize.SMALL,
    subtitle:
      "Orchestrated cloud deployments on Microsoft Azure, implementing CI/CD pipelines via Azure DevOps, for automated release management. Engineered an Employee Wellness Prediction System, benchmarking multiple ML models to deploy the optimal Flask solution on Azure Web Apps. Configured enterprise cloud infrastructure for the Adani Group, managing environment setup and service integration for large-scale operations. @ WIPRO (June 2025 - Aug 2025, Gurugram, Haryana)",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
