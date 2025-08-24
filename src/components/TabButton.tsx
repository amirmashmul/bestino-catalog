type TabButtonProps = {
  label: string;
  onClick: () => void;
  active?: boolean;
};

export default function TabButton({ label, onClick, active }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 flex-shrink-0 flex flex-col items-center rounded-lg
        transition-colors duration-200
        text-bold
        ${active
          ? "bg-[#18428f] text-white"
          : "bg-white text-black "}
      `}
    >
      <span className="text-xs whitespace-nowrap">{label}</span>
    </button>
  );
}
