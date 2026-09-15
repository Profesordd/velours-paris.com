"use client";

interface SizeSelectorProps {
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  const isBeltSize = sizes.some((s) => /^\d{2,3}$/.test(s));

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`h-10 px-3.5 border text-[11px] font-bold tracking-[0.08em] uppercase transition-all duration-150 ${
            selected === size
              ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
              : "bg-[#FAFAF8] text-[#7A7670] border-[#E8E3DA] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
          }`}
        >
          {isBeltSize ? `${size} cm` : size}
        </button>
      ))}
    </div>
  );
}
