export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  count: number;
  results: Array<Genre>;
}
