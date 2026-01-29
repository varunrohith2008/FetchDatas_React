
import React, { useState, useEffect } from 'react';

const Task3 = () => {
    const [data, setData] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.users))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Task 3: Show / Hide Data</h2>
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mb-4"
            >
                {isVisible ? 'Hide Data' : 'Show Data'}
            </button>

            {isVisible && (
                <ul className="space-y-2">
                    {data.map((user) => (
                        <li key={user.id} className="p-2 border-b border-gray-200">
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task3;
