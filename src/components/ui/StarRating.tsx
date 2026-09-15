import { Star } from "lucide-react";

export default function StarRating({ rating = 5, max = 5 }: { rating?: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}
