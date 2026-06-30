"use client";

type Props = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionButton({
  text,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 mb-3
        ${
          selected
            ? "border-blue-600 bg-blue-50"
            : "border-slate-200 hover:border-slate-300"
        }`}
    >
      {text}
    </button>
  );
}