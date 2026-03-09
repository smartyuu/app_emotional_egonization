export type EmotionLevel = '轻度' | '中度' | '明显';

export type EmotionTag =
  | '平静'
  | '隐性焦虑'
  | '低落'
  | '压抑'
  | '情绪过载'
  | '轻微亢奋';

export type JournalEntry = {
  id: string;
  title: string;
  preview: string;
  content: string;
  dateLabel: string;
  emotion: EmotionTag;
  emotionLevel: EmotionLevel;
  emotionHint: string;
  reply: string;
  tags: string[];
  bodySignalSummary: string;
};

export type TimelinePoint = {
  label: string;
  value: number;
  emotion: EmotionTag;
};
