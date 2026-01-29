
import React, { useState, useEffect } from 'react';

const Task1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Task 1: Fetch on Load</h2>
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

export default Task1;
