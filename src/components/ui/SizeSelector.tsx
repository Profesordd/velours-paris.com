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
              ? "bg-[#1A1410] text-white border-[#1A1410]"
              : "bg-white text-[#8A7A6A] border-[#E5DDD0] hover:border-[#1A1410] hover:text-[#1A1410]"
          }`}
        >
          {isBeltSize ? `${size} cm` : size}
        </button>
      ))}
    </div>
  );
}
