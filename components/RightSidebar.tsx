import { Accordion } from "@/components/ui/accordion";
import FontSetting from "./RightSidebar/FontSetting";
import ViewSetting from "./RightSidebar/ViewSetting";
import AppearanceSettings from "./RightSidebar/AppearanceSettings";

const RightSidebar = () => {
  return (
    <div className="p-4 w-[280px] overflow-hidden">
      <Accordion type="single" collapsible>
        <FontSetting />
        <ViewSetting />
        <AppearanceSettings />
      </Accordion>
    </div>
  );
};

export default RightSidebar;
