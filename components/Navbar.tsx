import React from "react";
import { HiColorSwatch } from "react-icons/hi";
import { RiSearchFill } from "react-icons/ri";
import { HiLanguage } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2.5 px-6 border-b">
      {/* left side */}
      <div>
        <h3 className="font-semibold text-xl">
          Dua <span className="text-[#417360]">&</span> Ruqyah
        </h3>
        <p className="font-medium text-sm">Hisnul Muslim</p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center gap-4">
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Search"
          className="cursor-pointer bg-[#417360]/25 p-2 rounded-full hover:scale-115 duration-200 transition-all"
        >
          <RiSearchFill size={18} className="text-[#417360]" />
        </button>

        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Color Swatch"
          className="cursor-pointer bg-[#417360]/25 p-2 rounded-full hover:scale-115 duration-200 transition-all"
        >
          <HiColorSwatch size={18} className="text-[#417360]" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Languages"
              className="cursor-pointer flex justify-center items-center gap-1 bg-[#417360]/25 p-2 rounded-full hover:scale-115 duration-200 transition-all"
            >
              <HiLanguage size={18} className="text-[#417360]" />
              <MdKeyboardArrowDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>En</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Languages"
          className="cursor-pointer flex justify-center items-center gap-2 bg-[#417360] text-white font-semibold px-3.5 py-1.5 rounded-full hover:scale-105 duration-200 transition-all"
        >
          <span>Support Us</span>
          <Image
            src="/images/direct-right.png"
            alt="right icon"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
