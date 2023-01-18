import { useNavigate } from 'react-router-dom';
import { RepoEntity } from '../types';

interface RepoProps {
  data: RepoEntity;
}

export function Repo({ data }: RepoProps) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/repo');
  };

  return (
    <div onClick={handleOnClick} className="py-4 bg-dark cursor-pointer">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-xl text-primary font-semibold">{data.name}</h2>
        <p className="font-semibold text-light text-sm">Forks: {data.forks}</p>
      </div>

      <p className="text-gray mt-2 text-sm">{data.description}</p>

      <button className="flex mt-4 items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-primary-dark" />
        <span className="text-gray text-sm">{data.language}</span>
      </button>
    </div>
  );
}
