import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";

export const routes = [
  {
    href: "/home",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export const MONTH_NAME = [
  "Janauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


export const typeWriterWords = [
  {
    text: "Build",
  },
  {
    text: "your own",
  },
  {
    text: "automation",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Workflows",
    className: "text-primary dark:text-primary",
  },
  {
    text: "and tools.",
    className: "text-primary dark:text-primary",

  },
];

export const howItWorks = [
  {
    title: "Share Your Idea",
    description:
      "Describe your project in plain language—GrewBie’s AI understands your vision and gets to work instantly.",
  },
  {
    title: "Generate Instantly",
    description:
      "Our AI builds a complete full-stack web app or workflow tailored to your needs—ready to run and fully functional.",
  },
  {
    title: "Edit with No Code",
    description:
      "Customize your project with an intuitive no-code editor—no technical skills required.",
  },
  {
    title: "Deploy & Share",
    description:
      "Launch your project in one click, sell templates, or share nodes with the community effortlessly.",
  },
];


export const headerRoutes = [
  {
    title: "How it works",
    href: "#howItWorks",
    className: "",
  },
  {
    title: "No Code Features",
    href: "#NoCodeFeatures",
    className: "",
  },
  {
    title: "Pricing",
    href: "#pricing",
    className: "",
  },
  {
    title: "Get Started",
    href: "/sign-in",
    className: "",
    button: true,
  },
];

export const pricingPlans = [
  {
    title: "Small Pack",
    description: "Get 1,000 credits",
    credits: 1000,
    price: 9.99,
    highlighted: true,
    link: "/billing",
  },
  {
    title: "Medium Pack",
    description: "Get 5,000 credits",
    credits: 5000,
    price: 39.99,
    highlighted: true,
    link: "/billing",
  },
  {
    title: "Large Pack",
    description: "Get 10,000 credits",
    credits: 10000,
    price: 69.99,
    highlighted: true,
    link: "/billing",
  },
];
