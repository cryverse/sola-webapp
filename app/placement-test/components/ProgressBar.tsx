"use client";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>Прогресс</span>
        <span>
          {current} / {total}
        </span>
      </div>

      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}