"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function WritingBox({ value, onChange }: Props) {
  return (
    <div className="w-full mb-6">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Напишите ваш ответ..."
        className="w-full min-h-[160px] p-4 border rounded-xl resize-none focus:outline-none focus:border-blue-500"
      />

      <div className="text-xs text-slate-400 mt-2 text-right">
        {value.length} символов
      </div>
    </div>
  );
}