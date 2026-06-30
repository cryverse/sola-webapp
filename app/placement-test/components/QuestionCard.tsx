"use client";

import OptionButton from "./OptionButton";
import AudioPlayer from "./AudioPlayer";
import WritingBox from "./WritingBox";
import { PlacementQuestion } from "../types";

type Props = {
  question: PlacementQuestion;
  selected: number | null;
  textAnswer: string;
  onSelect: (index: number) => void;
  onTextChange: (v: string) => void;
};

export default function QuestionCard({
  question,
  selected,
  textAnswer,
  onSelect,
  onTextChange,
}: Props) {
  if (!question) {
    return (
      <div className="w-full p-6 border rounded-xl text-center text-red-500">
        Question not found
      </div>
    );
  }

  const options = question.options ?? [];

  return (
    <div className="w-full border rounded-2xl p-6 bg-white shadow-sm">

      {/* QUESTION */}
      <h2 className="text-lg font-semibold mb-6">
        {question.question}
      </h2>

      {/* GRAMMAR / VOCABULARY */}
      {(question.type === "grammar" ||
        question.type === "vocabulary") && (
        <div className="space-y-3">
          {options.length > 0 ? (
            options.map((opt, i) => (
              <OptionButton
                key={i}
                text={opt}
                selected={selected === i}
                onClick={() => onSelect(i)}
              />
            ))
          ) : (
            <p className="text-slate-400">
              No options available
            </p>
          )}
        </div>
      )}

      {/* LISTENING */}
      {question.type === "listening" && (
        <div className="space-y-4">
          {question.audio ? (
            <AudioPlayer src={question.audio} />
          ) : (
            <p className="text-slate-400">
              No audio available
            </p>
          )}

          {options.length > 0 ? (
            options.map((opt, i) => (
              <OptionButton
                key={i}
                text={opt}
                selected={selected === i}
                onClick={() => onSelect(i)}
              />
            ))
          ) : (
            <p className="text-slate-400">
              No options available
            </p>
          )}
        </div>
      )}

      {/* WRITING */}
      {question.type === "writing" && (
        <WritingBox
          value={textAnswer}
          onChange={onTextChange}
        />
      )}

    </div>
  );
}