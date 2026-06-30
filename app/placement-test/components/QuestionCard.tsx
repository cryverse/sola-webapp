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
  return (
    <div className="w-full border rounded-2xl p-6 bg-white shadow-sm">

      {/* QUESTION */}
      <h2 className="text-lg font-semibold mb-6">
        {question.question}
      </h2>

      {/* GRAMMAR / VOCAB */}
      {(question.type === "grammar" ||
        question.type === "vocabulary") && (
        <div>
          {question.options?.map((opt, i) => (
            <OptionButton
              key={i}
              text={opt}
              selected={selected === i}
              onClick={() => onSelect(i)}
            />
          ))}
        </div>
      )}

      {/* LISTENING */}
      {question.type === "listening" && (
        <>
          <AudioPlayer src={question.audio || ""} />

          {question.options?.map((opt, i) => (
            <OptionButton
              key={i}
              text={opt}
              selected={selected === i}
              onClick={() => onSelect(i)}
            />
          ))}
        </>
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