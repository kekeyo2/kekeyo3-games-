
export enum TabType {
  HOME = 'home',
  GAMES = 'games',
  AI_BUDDY = 'ai_buddy',
  SETTINGS = 'settings'
}

export interface GameMetadata {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  portalUrl: string;
  category: string;
  themeColor: string;
  tags: string[];
}
