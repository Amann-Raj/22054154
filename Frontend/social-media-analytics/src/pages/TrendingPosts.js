import { useState, useEffect } from "react";
import { fetchTrendingPosts } from "../api";
import PostCard from "../components/PostCard";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default TrendingPosts;
