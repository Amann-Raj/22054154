function UserCard({ user }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">Posts: {user.postCount}</p>
      </div>
    );
  }
  
  export default UserCard;
  