export type QuestionType =
  | "grammar"
  | "vocabulary"
  | "listening"
  | "writing";

export type PlacementOption = {
  text: string;
  correct?: boolean;
};

export type PlacementQuestion = {
  id: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  type: QuestionType;
  question: string;
  options?: string[];
  correct?: number;
  audio?: string;
  script?: string;
};