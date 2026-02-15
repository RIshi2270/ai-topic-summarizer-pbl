export interface SlideContent {
  title: string;
  points: string[];
}

export interface ResearchResult {
  summary: string;
  explanation: string;
  keyPoints: string[];
  conclusion: string;
  slides: SlideContent[];
  rawText?: string;
}

export interface GenerationStats {
  accuracy: number;
  timeSaved: number;
  qualityScore: number;
}

export enum GenerationState {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  GENERATING_AUDIO = 'GENERATING_AUDIO',
  GENERATING_VIDEO = 'GENERATING_VIDEO',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface VideoOperationResponse {
  name: string;
  done: boolean;
  response?: {
    generatedVideos: {
      video: {
        uri: string;
      }
    }[]
  }
}