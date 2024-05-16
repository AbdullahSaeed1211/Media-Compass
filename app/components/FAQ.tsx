"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "Can I manage multiple social media accounts with your platform?",
    answer:
      "Yes, our platform supports multiple accounts, allowing you to manage all your social media profiles from one centralized dashboard.",
  },
  {
    question: "Does your platform support all major social networks?",
    answer:
      "Yes, we support Facebook, Instagram, Twitter, LinkedIn, and more. You can manage and analyze your presence across all major social media networks.",
  },
  {
    question: "How can I measure the success of my social media campaigns?",
    answer:
      "Our platform provides detailed analytics and reporting tools that help you track key performance indicators (KPIs) and measure the success of your campaigns.",
  },
  {
    question: "Is it possible to collaborate with my team on your platform?",
    answer:
      "Absolutely! Our platform includes collaboration features that allow you to work with your team, assign tasks, and approve content before it goes live.",
  },
  {
    question: "Do you offer any training or support for new users?",
    answer:
      "Yes, we provide comprehensive onboarding, training materials, and 24/7 customer support to ensure you get the most out of our platform.",
  },
  {
    question: "Can I schedule posts for different time zones?",
    answer:
      "Yes, our scheduling tool allows you to set different posting times for various time zones, ensuring your content reaches your audience at the optimal time.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#0085FF] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4">
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
