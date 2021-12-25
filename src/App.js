import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App bg-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-screen">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto ">

          <p data-testid="counter" className='my-8 text-2xl text-center'>{count}</p>

          <div class="flex">

            <button
              type="button"
              data-testid="button-1"
              onClick={() => setCount(count + 1)}
              className="mx-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              +1
            </button>

            <button
              type="button"
              data-testid="button-2"
              onClick={() => setCount(count + 2)}
              className="mx-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              +2
            </button>

            <button
              type="button"
              data-testid="button-3"
              onClick={() => setCount(count - 1)}
              className="mx-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              -1
            </button>

            <button
              type="button"
              data-testid="button-4"
              onClick={() => setCount(count - 2)}
              className="mx-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              -2
            </button>

          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
