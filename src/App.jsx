
import React, { useState } from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';

function App() {
  const [activeTask, setActiveTask] = useState(1);

  const renderTask = () => {
    switch (activeTask) {
      case 1: return <Task1 />;
      case 2: return <Task2 />;
      case 3: return <Task3 />;
      case 4: return <Task4 />;
      case 5: return <Task5 />;
      case 6: return <Task6 />;
      case 7: return <Task7 />;
      case 8: return <Task8 />;
      case 9: return <Task9 />;
      case 10: return <Task10 />;
      default: return <Task1 />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold">React Tasks</h1>
          <p className="text-sm text-gray-400">Day 23 Assignment</p>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              onClick={() => setActiveTask(num)}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${activeTask === num
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              Task {num}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {renderTask()}
        </div>
      </div>
    </div>
  );
}

export default App;
