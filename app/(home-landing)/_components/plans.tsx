"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/accernity-ui/3d-card";
import { pricingPlans } from "@/lib/data";

export function PricingPlans3D() {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className={`bg-gray-50 relative group/card dark:bg-black border border-black/[0.1] dark:border-white/[0.2] w-auto sm:w-[22rem] h-auto rounded-xl p-6 transition-shadow duration-300 ${
                plan.highlighted
                  ? "hover:ring-2 hover:ring-emerald-500 dark:hover:shadow-emerald-500/[0.2]"
                  : "hover:shadow-lg"
              }`}
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {plan.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {plan.description}
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="text-neutral-700 dark:text-neutral-200 text-lg mt-4"
              >
                ${plan.price.toFixed(2)}
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={plan.link}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border border-neutral-300 dark:border-neutral-700"
                >
                  View Plan →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={plan.link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    );
  }
