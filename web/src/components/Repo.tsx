export function Repo() {
  return (
    <div className="py-4 bg-dark cursor-pointer">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-xl text-primary font-semibold">
          silverorange-node-react{' '}
        </h2>

        <p className="font-semibold text-light text-sm">Forks: 30</p>
      </div>

      <p className="text-gray mt-2 text-sm">
        Personal website built with NextJS and TailwindCSS
      </p>

      <button className="flex mt-4 items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-primary-dark" />
        <span className="text-gray text-sm">Javascript</span>
      </button>
    </div>
  );
}
