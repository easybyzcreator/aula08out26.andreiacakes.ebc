export interface SlideTopic {
  title?: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface SlideData {
  id: number;
  slideNumber: number;
  category: string;
  title: string;
  subtitle?: string;
  topics?: SlideTopic[];
  notes?: string[];
}

export type DrawingTool = 'pointer' | 'pen' | 'highlighter' | 'eraser';

export interface DrawPoint {
  x: number;
  y: number;
}

export interface DrawPath {
  tool: DrawingTool;
  color: string;
  size: number;
  points: DrawPoint[];
}
