import type { Tab } from "../types/tab";
import TabButton from "./TabButton";

type TabListProps = {
  tabs: Tab[];
  onSelect: (img: string) => void;
  activeImg: string | null;
};

export default function TabList({ tabs, onSelect, activeImg }: TabListProps) {
  return (
    <div className="inset-0 bg-black/60">
      <div className="flex space-x-6 overflow-x-auto px-4 py-4 scrollbar-hide">
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            onClick={() => onSelect(tab.img)}
            active={activeImg === tab.img}
          />
        ))}
      </div>
    </div>
  );
}
