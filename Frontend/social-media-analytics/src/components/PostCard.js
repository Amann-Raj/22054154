function PostCard({ post }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-600">{post.content}</p>
        <p className="text-sm text-gray-400">Comments: {post.commentCount}</p>
      </div>
    );
  }
  
  export default PostCard;
  