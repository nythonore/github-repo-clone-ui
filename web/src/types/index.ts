export interface ListResponse<T> {
  status: number;
  data: T[];
}

export interface RepoEntity {
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  full_name: string;
  description: string;
  language: string;
  forks: number;
}
