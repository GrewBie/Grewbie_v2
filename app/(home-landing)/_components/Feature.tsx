import { cn } from "@/lib/utils";
import {
  BrainIcon,
  CodeIcon,
  DatabaseIcon,
  Edit3Icon,
  EyeIcon,
  FileJson2Icon,
  GaugeIcon,
  GlobeIcon,
  HistoryIcon,
  Link2Icon,
  MouseIcon,
  MousePointerClick,
  RepeatIcon,
  SendIcon,
  StoreIcon,
  TextIcon,
  UsersIcon,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
    title: "One-Click Deployment",
    description:
      "Deploy your app instantly—no servers, no setup, just a live URL in seconds.",
    icon: <SendIcon className="stroke-blue-400" />,
    hoverChipClassName: "group-hover/feature:bg-blue-500",
  },
  {
    title: "Template Marketplace",
    description:
      "Create and sell reusable components, workflows, or templates to the GrewBie community.",
    icon: <StoreIcon className="stroke-pink-400" />,
    hoverChipClassName: "group-hover/feature:bg-pink-500",
  },
  {
    title: "Version Control",
    description:
      "Track changes and roll back to previous versions effortlessly with built-in version history.",
    icon: <HistoryIcon className="stroke-amber-400" />,
    hoverChipClassName: "group-hover/feature:bg-amber-500",
  },
  {
    title: "Data & API Integration",
    description:
      "Connect to external APIs, databases, and services with just a few clicks—no coding needed.",
    icon: <DatabaseIcon className="stroke-rose-400" />,
    hoverChipClassName: "group-hover/feature:bg-rose-500",
  },
    {
      title: "Launch browser",
      description:
        "Initiates a browser instance to begin the web scraping process, enabling interaction with web pages.",
      icon: <GlobeIcon className="stroke-pink-400" />,
      hoverChipClassName: "group-hover/feature:bg-pink-500",
    },
    {
      title: "Usage & Analytics Dashboard",
      description:
        "Track credit consumption, monitor workflow executions, and view performance metrics in one unified dashboard. Gain insights into what’s working and optimize your automations accordingly.",
      icon: <GaugeIcon className="stroke-violet-400" />,
      hoverChipClassName: "group-hover/feature:bg-violet-500",
    },
    {
      title: "Extract text from element",
      description:
        "Retrieves the text content from a specified HTML element using a given CSS selector.",
      icon: <TextIcon className="stroke-rose-400" />,
      hoverChipClassName: "group-hover/feature:bg-rose-500",
    },
    {
      title: "Reusable Blocks",
      description:
        "Save and reuse your own logic blocks or UI components across multiple projects.",
      icon: <RepeatIcon className="stroke-indigo-400" />,
      hoverChipClassName: "group-hover/feature:bg-indigo-500",
    },
    {
      title: "Team Collaboration",
      description:
        "Invite teammates to co-build, comment, and edit projects in real time—ideal for startups and agencies.",
      icon: <UsersIcon className="stroke-green-400" />,
      hoverChipClassName: "group-hover/feature:bg-green-500",
    },
    {
      title: "Scroll to element",
      description:
        "Scrolls to a specified element on the page, emulating user behavior for dynamic content loading.",
      icon: <MouseIcon className="stroke-orange-400" />,
      hoverChipClassName: "group-hover/feature:bg-orange-500",
    },
    {
      title: "Deliver via webhook",
      description:
        "Sends the scraped data to an external API endpoint through a POST request for further processing or storage.",
      icon: <SendIcon className="stroke-blue-400" />,
      hoverChipClassName: "group-hover/feature:bg-blue-500",
    },
    {
      title: "Extract data via AI",
      description:
        "Uses AI to parse HTML content and extract structured data based on a custom prompt, returning JSON output.",
      icon: <BrainIcon className="stroke-rose-400" />,
      hoverChipClassName: "group-hover/feature:bg-rose-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          index={index}
          hoverChipClassName={feature.hoverChipClassName as string}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  hoverChipClassName,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  hoverChipClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center",
            hoverChipClassName
          )}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
