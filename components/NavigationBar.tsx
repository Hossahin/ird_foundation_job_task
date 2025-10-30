import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

const NavigationBar = () => {
  return (
    <div className="w-[280px] flex flex-col gap-4.5">
      {/* Search */}
      <div className="relative w-full mt-6">
        <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="search"
          placeholder="Search by Dua Categories"
          name="search"
          className="bg-[#E1EBE1]/40 pl-12 pr-4 py-3 rounded-full w-full focus:outline-none"
        />
      </div>

      {/* Box 1 */}
      <div className="w-full px-2 flex gap-4 justify-left items-center">
        <div className="flex justify-center items-center w-8 h-8 p-1.5 bg-[#417360]/25 rounded-md">
          <Image
            src="/images/duas importance.png"
            alt="duas importance"
            width={21}
            height={27}
          />
        </div>
        <div>
          <h3 className="font-medium text-sm">Dua Importance</h3>
          <p className="text-[#7C827D] text-xs">7 Subcat | 50 Duas</p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="w-full px-2 flex gap-4 justify-left items-center">
        <div className="flex justify-center items-center w-8 h-8 p-1.5 bg-[#417360]/25 rounded-md">
          <Image
            src="/images/Adhan.png"
            alt="duas importance"
            width={21}
            height={27}
          />
        </div>
        <div>
          <h3 className="font-medium text-sm">Dua Importance</h3>
          <p className="text-[#7C827D] text-xs">7 Subcat | 50 Duas</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="w-full px-2 flex gap-4 justify-left items-center">
        <div className="flex justify-center items-center w-8 h-8 p-1.5 bg-[#417360]/25 rounded-md">
          <Image
            src="/images/bedug-8981652.png"
            alt="duas importance"
            width={21}
            height={27}
          />
        </div>
        <div>
          <h3 className="font-medium text-sm">Dua Importance</h3>
          <p className="text-[#7C827D] text-xs">7 Subcat | 50 Duas</p>
        </div>
      </div>

      {/* Box 4 */}
      <div className="w-full px-2 flex gap-4 justify-left items-center">
        <div className="flex justify-center items-center w-8 h-8 p-1.5 bg-[#417360]/25 rounded-md">
          <Image
            src="/images/calendar-8981685.png"
            alt="duas importance"
            width={21}
            height={27}
          />
        </div>
        <div>
          <h3 className="font-medium text-sm">Dua Importance</h3>
          <p className="text-[#7C827D] text-xs">7 Subcat | 50 Duas</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
