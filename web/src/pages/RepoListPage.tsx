import { Repo } from '../components';

export function RepositoryListPage() {
  const repos = [1, 2, 3, 4, 5];

  return (
    <div className="bg-dark w-full min-h-screen py-8">
      <div className="container">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-git text-white w-5 h-5"
            viewBox="0 0 16 16"
          >
            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
          </svg>

          <h2 className="text-lg font-bold text-light">Repositories</h2>

          <div className="bg-[#343941] text-sm px-2 py-0.5 rounded-xl text-white">
            {repos.length}
          </div>
        </div>

        <div className="bg-light divide-y divide-slate-800 mt-5">
          {repos.map((row, key) => (
            <Repo key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
