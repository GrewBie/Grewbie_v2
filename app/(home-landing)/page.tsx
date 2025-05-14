"use client";
import { TypewriterEffectSmooth } from "@/components/accernity-ui/TypeWriterEffect";
import { Button } from "@/components/ui/button";
import { pricingPlans, typeWriterWords } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { FeaturesSection } from "./_components/Feature";
import { FeaturesGradient } from "./_components/FeaturesGradient";
import { HoverEffect } from "@/components/accernity-ui/CardHover";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import { MacScroll } from "./_components/mackBookScrool";
import { LampComponent } from "@/components/ui/lamp";
import { PricingPlans3D } from "./_components/plans";

export default function HomeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen gap-4 selection:bg-primary selection:text-white dark bg-[#0C0A09]">
      <Navbar />
      <SectionWrapper className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MacScroll/>
      </SectionWrapper>
      <SectionWrapper
        id="howItWorks"
        primaryTitle="How"
        secondaryTitle="It Works"
      >
      <FeaturesGradient />
      </SectionWrapper>
      <SectionWrapper
        id="NoCodeFeatures"
        primaryTitle="No Code"
        secondaryTitle="Features"
      >
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32"
        
      >
        <LampComponent/>
        <div className="flex flex-wrap w-full justify-center
        flex-col md:flex-row gap-2 -mt-72">
          <PricingPlans3D/>
        </div>
      </SectionWrapper>

      <SectionWrapper className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#22C55E] to-green-600">
          Start Automating Today
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Join thousands of users who are already leveraging our Automation platform.
        </p>
        <Link
          className="w-max bg-[#22C55E] text-white hover:bg-[#22C55E]/90 transition-colors flex px-4 py-2 rounded-sm items-center"
          href={"/sign-in"}
        >
          Sign Up Now
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          No credit card required. Start with 200 free credits.
        </p>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({
  children,
  className,
  id,
  primaryTitle,
  secondaryTitle,
  fullWidth = false, 
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
  fullWidth?: boolean;  
}) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-10 box-border scroll-mt-[80px] p-5 md:p-10",
        fullWidth ? "w-full" : "max-w-screen-xl mx-auto",
        className
      )}
      id={id}
    >
      {(primaryTitle || secondaryTitle) && (
        <div className="text-2xl md:text-4xl lg:text-6xl text-foreground">
          <span className="text-primary">{primaryTitle}</span>{" "}
          <span className="">{secondaryTitle}</span>
        </div>
      )}
      {children}
    </section>
  );
}

