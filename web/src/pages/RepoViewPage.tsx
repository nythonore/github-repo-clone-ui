import { Link } from 'react-router-dom';
import { Commit } from '../components';

export function RepositoryViewPage() {
  return (
    <div className="bg-dark w-full min-h-screen py-8">
      <div className="container">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <h2 className="text-lg font-bold text-light">
            silverorange-node-react
          </h2>

          <Link
            to="/"
            className="bg-primary flex gap-1 items-center text-white text-sm font-semibold px-3 py-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Go Back
          </Link>
        </div>

        <div className="mt-5">
          <p className="text-gray text-xs uppercase font-semibold">
            Recent Commit
          </p>

          <div className="mt-1">
            <Commit />
          </div>
        </div>
      </div>
    </div>
  );
}
