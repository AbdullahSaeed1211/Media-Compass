"use client";
import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";
import Link from "next/link";
import Logo2 from "@/public/assets/compass.svg";

const navLinks = [
  {
    name: "Features",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Enterprise",
    link: "/",
  },
  {
    name: "Careers",
    link: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo2} alt="logo" height={24} width={24} className="mr-2" />
        <span className="text-[#36485C] font-md">Media Compass</span>
        <div className="hidden lg:block pl-[74px]">
          <ul className="flex gap-x-[56px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.link} className="text-[#36485C] font-md">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className=" hidden font-md text-[#36485C] pr-[56px] lg:block">Open an Account</p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden  font-md text-[#36485C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
