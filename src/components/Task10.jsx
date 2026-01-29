
import React, { useState, useEffect } from 'react';

const Task10 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Task 10: No Data Found</h2>

            {data.length === 0 ? (
                <p className="text-center text-red-500 font-bold text-xl p-4">
                    No Data Found
                </p>
            ) : (
                <ul className="space-y-2">
                    {data.map((user) => (
                        <li key={user.id} className="p-2 border-b border-gray-200 flex justify-between items-center">
                            <span>{user.firstName} {user.lastName}</span>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {data.length > 0 && (
                <button
                    onClick={() => setData([])}
                    className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
                >
                    Delete All (Simulate Empty)
                </button>
            )}
        </div>
    );
};

export default Task10;
