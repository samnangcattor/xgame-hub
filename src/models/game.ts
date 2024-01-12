import { Genre } from './genre';

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
  rating_top: number;
  rating: number;
}

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortOrder: { value: string; label: string } | null;
  searchText: string | null;
}
