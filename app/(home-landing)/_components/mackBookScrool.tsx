import React from "react";
import { MacbookScroll } from "@/components/accernity-ui/macbook-scroll";
import { Cover } from "@/components/accernity-ui/cover";
import LitupButton from "@/components/ui/LitupButton";
import Link from "next/link";

export function MacScroll() {
  return (
    <div >
      <MacbookScroll
        title={
            <div >
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent 
                bg-gradient-to-b from-black to-gray-400 dark:from-white dark:to-neutral-600
                font-sans font-bold transition-colors duration-300">
                Build and Automate with
                <Cover className="bg-clip-text text-transparent bg-gradient-to-b 
                from-black to-gray-400 dark:from-white dark:to-neutral-600 ">
                Grewie
                </Cover> 
                </h1>
                <p className="text-muted-foreground text-sm md:text-xl p-2">
                Create, modify, automate and deploy with ease. No
                coding required.
                </p>
                <LitupButton><Link href={"/sign-in"}>Get Started</Link></LitupButton>
                <p className="text-sm text-primary p-2">
                New users get 100 credits for free upon first login
                </p>
            </div>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}

