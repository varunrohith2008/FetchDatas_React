
import React, { useState } from 'react';

const Task8 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Task 8: Show Count</h2>
            <button
                onClick={fetchData}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
                Fetch Data
            </button>

            {loading && <p className="text-blue-500 font-semibold">Loading...</p>}

            {!loading && data && (
                <div>
                    <p className="font-bold text-lg mb-2">Total Users: {data.length}</p>
                    <ul className="space-y-2">
                        {data.map((user) => (
                            <li key={user.id} className="p-2 border-b border-gray-200">
                                {user.firstName} {user.lastName}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Task8;
