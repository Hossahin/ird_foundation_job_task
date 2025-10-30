import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { RiCheckboxMultipleFill } from "react-icons/ri";

const ViewSetting = () => {
  return (
    <>
      {/* Font Setting */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#417360]/25 p-1.5 rounded-full font-semibold text-[#417360]">
              <RiCheckboxMultipleFill size={18} />
            </span>
            <span className="font-semibold text-[#417360]">View Setting</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col justify-center gap-4">
          {/* Show Arabic */}
          <div className="flex justify-between items-center">
            <span>Show Arabic</span>
            <span>
              <Switch />
            </span>
          </div>
          {/* Show Translation */}
          <div className="flex justify-between items-center">
            <span>Show Translation</span>
            <span>
              <Switch />
            </span>
          </div>
          {/* Show Transliteration */}
          <div className="flex justify-between items-center">
            <span>Show Transliteration</span>
            <span>
              <Switch />
            </span>
          </div>
          {/* Show Reference */}
          <div className="flex justify-between items-center">
            <span>Show Reference</span>
            <span>
              <Switch />
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default ViewSetting;
