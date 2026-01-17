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
    title: "Lorem ipsum dolor sit",
    size: ItemSize.SMALL,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Consectetur adipiscing elit (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Ullamco laboris nisi",
    size: ItemSize.SMALL,
    subtitle:
      "Ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Esse cillum dolore (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Mollit anim id (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Est laborum sed ut perspiciatis unde omnis iste natus error 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Sit voluptatem accusantium",
    size: ItemSize.SMALL,
    subtitle:
      "Doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Architecto beatae vitae",
    size: ItemSize.SMALL,
    subtitle:
      "Dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 🥳",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Aut fugit sed quia 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dolorem ipsum quia dolor",
    size: ItemSize.SMALL,
    subtitle:
      "Sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt labore",
    image: "/timeline/si.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Ut aliquam quaerat voluptatem",
    size: ItemSize.SMALL,
    subtitle:
      "Maiores alias consequatur aut perferendis doloribus asperiores repellat temporibus quibusdam",

    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Quis autem vel eum iure",
    size: ItemSize.SMALL,
    subtitle:
      "Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Quo dolore fugiat harum",
    size: ItemSize.SMALL,
    subtitle:
      "Quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Eligendi optio cumque nihil",
    size: ItemSize.SMALL,
    subtitle:
      "Impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Omnis dolor repellendus",
    size: ItemSize.SMALL,
    subtitle:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Ut et voluptates repudiandae",
    size: ItemSize.SMALL,
    subtitle: "Sint et molestiae non recusandae itaque earum rerum hic tenetur sapiente delectus",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Officiis aut rerum necessitatibus",
    size: ItemSize.SMALL,
    subtitle:
      "Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum",
    image: "/timeline/si.svg",
    slideImage: "/timeline/Wipro.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Rerum hic tenetur sapiente",
    size: ItemSize.SMALL,
    subtitle:
      "Delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus",
    image: "/timeline/xda.svg",
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
