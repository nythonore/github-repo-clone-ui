import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useFetch } from '../hooks';
import { Commit } from '../components';
import { config } from '../config';
import { Commitentity } from '../types';

export function RepositoryViewPage() {
  const { owner, name } = useParams();

  const {
    loading: commitLoading,
    data: commitData,
    error: commitError,
  } = useFetch<Commitentity[]>(
    `${config.GITHUB_API}/repos/${owner}/${name}/commits`
  );

  const { loading: readmeLoading, data: readmeData } = useFetch<string>(
    `${config.GITHUB_USER_CONTENT}/${owner}/${name}/main/README.md`
  );

  return (
    <div className="bg-dark w-full min-h-screen py-8">
      <div className="container">
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <h2 className="text-lg font-bold text-light">{`${owner}/${name}`}</h2>

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
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Go Back
          </Link>
        </div>

        {commitLoading && (
          <div className="mt-5">
            <h2 className="text-white">Loading ...</h2>
          </div>
        )}

        {!commitLoading && commitError && (
          <div className="mt-5">
            <h2 className="text-white">Failed to fetch data!</h2>
          </div>
        )}

        {!commitLoading && commitData && (
          <div className="mt-5">
            <p className="text-gray text-xs uppercase font-semibold">
              Recent Commits
            </p>

            <div className="mt-1 divide-y divide-slate-800">
              {commitData.map((row, key) => (
                <Commit key={key} data={row} />
              ))}
            </div>
          </div>
        )}

        {!readmeLoading && readmeData && (
          <div className="mt-5 border border-slate-800 rounded-lg">
            <div className="border-b border-slate-800 p-4 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list text-white w-4 h-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>

              <p className="text-white text-xs uppercase font-semibold">
                Readme.md
              </p>
            </div>

            <div className="text-white p-4">
              <ReactMarkdown>{readmeData}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
