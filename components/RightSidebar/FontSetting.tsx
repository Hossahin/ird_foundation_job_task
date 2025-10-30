"use client";
import React, { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { AiOutlineFontSize } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FontSetting = () => {
  const [fontSize, setFontSize] = useState<number[]>([16]);
  const [translationFontSize, setTranslationFontSize] = useState<number[]>([
    16,
  ]);
  return (
    <>
      {/* Font Setting */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#417360]/25 p-1.5 rounded-full font-semibold text-[#417360]">
              <AiOutlineFontSize size={18} />
            </span>
            <span className="font-semibold text-[#417360]">Font Setting</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {/* Font Size Section */}
          <div>
            <h3>Arabic Font Size</h3>
            <div className="flex justify-between items-center gap-4">
              <Slider
                className="w-full h-10"
                value={fontSize}
                onValueChange={setFontSize}
                max={100}
                step={1}
              />
              <span className="font-semibold text-[#417360]">{fontSize}</span>
            </div>
          </div>
          {/* Translation Font Size */}
          <div>
            <h3>Translation Font Size</h3>
            <div className="flex justify-between items-center gap-4">
              <Slider
                className="w-full h-10"
                value={translationFontSize}
                onValueChange={setTranslationFontSize}
                max={100}
                step={1}
              />
              <span className="font-semibold text-[#417360]">
                {translationFontSize}
              </span>
            </div>
          </div>
          {/* Arabic Script & Font Face */}
          <div>
            <h3>Arabic Script & Font Face</h3>
            <div className="">
              <Select>
                <SelectTrigger className="w-full mt-4">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uthma">Uthma</SelectItem>
                  <SelectItem value="noorehuda">Noor E Huda</SelectItem>
                  <SelectItem value="noorehedayet">Noor E Hedayet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default FontSetting;
