import { Commitentity } from '../types';
import { format } from '../utils';

interface CommitProps {
  data: Commitentity;
}

export function Commit({ data }: CommitProps) {
  return (
    <div className="py-2 rounded-lg">
      <p className="text-light/90 font-medium text-[15px]">
        {data.commit.message}
      </p>

      <div className="flex mt-1.5 items-center gap-1">
        <img
          alt={data.author.login}
          src={data.author.avatar_url}
          className="w-4 h-4 rounded-full"
        />
        <p className="text-light text-xs font-normal">{data.author.login}</p>
        <p className="text-gray text-xs font-normal">
          {format.dateFromNow(data.commit.author.date)}
        </p>
      </div>
    </div>
  );
}
