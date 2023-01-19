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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: string;
}

export interface Commitentity {
  commit: {
    author: {
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    avatar_url: string;
  };
}
