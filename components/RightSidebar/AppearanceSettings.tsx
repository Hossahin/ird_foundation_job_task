import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiCheckboxMultipleFill } from "react-icons/ri";

const AppearanceSettings = () => {
  return (
    <>
      {/* Font Setting */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#417360]/25 p-1.5 rounded-full font-semibold text-[#417360]">
              <RiCheckboxMultipleFill size={18} />
            </span>
            <span className="font-semibold text-[#417360]">
              Appearance Settings
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col justify-center gap-4">
          <span>Coming soon</span>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default AppearanceSettings;
