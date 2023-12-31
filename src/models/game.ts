export const GAME_CARD_MAX_WIDTH = '400px';
export enum GAME_CARD_SKELETON_WIDTH {
  MIN = '200px',
  MAX = GAME_CARD_MAX_WIDTH,
}

export const GAME_GRID_COLUMNS = {
  sm: 2,
  md: 3,
  lg: 4,
  xl: 4,
};

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Array<Game>;
}
