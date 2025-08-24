import { useState } from "react";
import { Tabs } from "./Tabs";
import TabList from "./TabList";

export default function Slider() {
  const defaultTab = Tabs.find((t) => t.key === "homepage");
  const [activeImg, setActiveImg] = useState<string | null>(
    defaultTab ? defaultTab.img : null
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center relative">
        {activeImg && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" />
            <img
              src={activeImg}
              alt="active"
              className="relative z-10 w-full h-full p-[33px] object-contain rounded-[61px]"
            />
          </div>
      )}
      </div>

      <TabList tabs={Tabs} onSelect={setActiveImg} activeImg={activeImg} />
    </div>
  );
}
