import Image from "next/image";
import blueArrow from "@/public/assets/blue-button.svg";

export default function CTA() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-[#00FF87] to-[#0061FF] py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        Master Social Media Management Like a Pro{" "}
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        Join over 800+ happy influences owners boosting productivity and
        efficiency!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-[#0085FF] w-fit font-medium">
          Start Your Free Trial{" "}
        </button>

        <button className="flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0">
          Explore Pricing Options{" "}
          <span>
            <Image src={blueArrow} alt="Learn More" />
          </span>
        </button>
      </div>
    </div>
  );
}
