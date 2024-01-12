export interface FetchResponse<T> {
  count: number;
  results: Array<T>;
  next?: string | null;
}
