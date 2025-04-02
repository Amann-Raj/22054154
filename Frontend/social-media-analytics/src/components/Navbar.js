import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-center space-x-4">
        <Link className="text-white text-lg font-bold" to="/">Feed</Link>
        <Link className="text-white text-lg font-bold" to="/top-users">Top Users</Link>
        <Link className="text-white text-lg font-bold" to="/trending-posts">Trending Posts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
