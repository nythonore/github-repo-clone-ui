import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RepoEntity } from '../types';

interface RepoProps {
  data: RepoEntity;
  onFilter: () => void;
}

export function Repo({ data, onFilter }: RepoProps) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/repo/${data.full_name}`);
  };

  const handleOnFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onFilter();
  };

  return (
    <div onClick={handleOnClick} className="py-3 bg-dark cursor-pointer">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-lg text-primary leading-none font-semibold">
          {data.name}
        </h2>
        <p className="font-semibold text-light text-sm">Forks: {data.forks}</p>
      </div>

      <p className="text-gray mt-1 text-sm">{data.description}</p>

      <button className="flex mt-2 items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-primary-dark" />
        <button className="text-gray text-sm" onClick={handleOnFilter}>
          {data.language}
        </button>
      </button>
    </div>
  );
}
