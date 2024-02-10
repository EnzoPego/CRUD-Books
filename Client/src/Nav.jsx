import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-6 flex-wrap justify-around bg-silver">
      <Link to='/' >
        <h1 className="text-4xl font-semibold">Books 😎</h1>
      </Link>
    </div>
  );
};
