export function Commit() {
  return (
    <div className="bg-[#161B22] p-4 rounded-lg">
      <p className="text-light/90 font-medium text-[15px]">
        reactjs setup & added repo component UI
      </p>

      <div className="flex mt-1.5 items-center gap-1">
        <img
          alt=""
          src="https://avatars.githubusercontent.com/u/44605059?s=120&v=4"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-light text-xs font-normal">nythonore</p>
        <p className="text-gray text-xs font-normal">
          Committed 20 minutes ago
        </p>
      </div>
    </div>
  );
}
