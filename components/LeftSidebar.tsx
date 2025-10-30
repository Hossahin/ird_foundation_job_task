"use client";
import Image from "next/image";
import Link from "next/link";
import { BiHomeCircle } from "react-icons/bi";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { TfiBook } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";

const LeftSidebar = () => {
  return (
    <div className="w-16 h-screen flex flex-col justify-between items-center py-4 bg-[#417360]/20">
      {/* Top Logo */}
      <div className="cursor-pointer w-10 h-10 flex justify-center items-center bg-[#417360] hover:scale-115 rounded-md duration-200 transition-all">
        <Image src={"/images/logo.png"} alt="logo" width={24} height={24} />
      </div>

      {/* Center items */}
      <div className="flex flex-col justify-center items-center gap-6">
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <BiHomeCircle size={25} />
        </Link>
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Category"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <TbCategory size={25} />
        </Link>
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Dua"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <FaRegLightbulb size={25} />
        </Link>
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Bookmarks"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <CiBookmarkMinus size={25} />
        </Link>
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Ruqyah"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <TfiBook size={25} />
        </Link>

        <Tooltip id="my-tooltip" />
      </div>

      {/* bottom side */}
      <div>
        <Link
          href={""}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Menu"
          className="cursor-pointer p-2 text-[#709484] hover:bg-[#417360]/25 hover:scale-115 rounded-md duration-200 transition-all"
        >
          <IoMdMenu size={25} />
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
