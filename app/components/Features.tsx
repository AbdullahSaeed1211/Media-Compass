"use client";
import Image from "next/image";
import Feature1 from "@/public/assets/feature-1.svg";
import Feature2 from "@/public/assets/feature-2.svg";
import Feature3 from "@/public/assets/feature-3.svg";
import Check from "@/public/assets/check.svg";
import bluebutton from "@/public/assets/blue-button.svg";
import greenButton from "@/public/assets/green-button.svg";
import pinkButton from "@/public/assets/pink-button.svg";

export default function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
            Content Scheduling
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Streamline Your Content Scheduling
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Plan and schedule your posts effortlessly. Our intuitive calendar
            interface allows you to organize your content, ensuring consistent
            and timely delivery across all platforms.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Drag-and-Drop Calendar
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Multi-Platform Posting
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Automated Scheduling
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Engagement Tools
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Boost Your Audience Engagement
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Engage with your followers like never before. Monitor comments,
            messages, and mentions in real time, and respond quickly to foster
            stronger connections with your audience.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Unified Inbox{" "}
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Real-Time Notifications{" "}
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Engagement Analytics
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
          Performance Analytics
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C] ">Comprehensive Analytics Dashboard</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">Competitor Analysis</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
