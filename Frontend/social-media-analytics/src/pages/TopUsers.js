import React, { useEffect, useState } from "react";
import { fetchTopUsers } from "../api"; // Make sure you import the API function

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchTopUsers();
            setUsers(data);
        };
        getUsers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Top Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="p-2 border-b">{user.name} - {user.postCount} posts</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TopUsers;
