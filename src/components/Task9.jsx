
import React, { useState, useEffect } from 'react';

const Task9 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            const nameA = `${a.firstName} ${a.lastName}`;
            const nameB = `${b.firstName} ${b.lastName}`;
            return nameA.localeCompare(nameB);
        });
        setData(sortedData);
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Task 9: Sort Alphabetically</h2>
            <button
                onClick={handleSort}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mb-4"
            >
                Sort by Name
            </button>

            <ul className="space-y-2">
                {data.map((user) => (
                    <li key={user.id} className="p-2 border-b border-gray-200">
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task9;
