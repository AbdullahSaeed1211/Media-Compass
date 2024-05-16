"use client";
import BlurArrow from "@/public/assets/blue-button.svg";
import Gradient from "@/public/assets/Gradient.svg";
import GreenGradient from "@/public/assets/GreenGradient.svg";
import HeroImage from "@/public/assets/Image.svg";
import HeroImage2 from "@/public/assets/hero2.svg";
import Google from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import CNN from "@/public/assets/CNN.svg";
import Clutch from "@/public/assets/Clutch.svg";
import Image from "next/image";
import Line from "@/public/assets/llline.svg";
import BlueGradient from "@/public/assets/BlueGradient.svg";

export default function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="kavoon-font text-center text-[32px] leading-[40px] font-extrabold text-[#172026] lg:text-[64px]  lg:leading-[72px] ">
        Elevate Your Social Media Presence like a{" "}
          <span className="relative inline-block">
            pro
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 w-full lg:w-[80%]">
              <Image src={Line} alt="line" className="lg:-mt-7 -mt-5" layout="responsive" />
            </div>
          </span>
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
        Manage, schedule, and analyze all your social media campaigns in one place. Our platform provides powerful tools to streamline your social media strategy, enhance engagement, and track performance across all major social networks. Whether you`re a small business or a large enterprise, we help you stay ahead of the curve.
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for Free
          </button>
          <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={BlueGradient}
          alt="hero gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className=" -ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] font-md text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Trustpilot} alt="" />
              <Image src={CNN} alt="" />
              <Image src={Clutch} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
