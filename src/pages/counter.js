import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Event handler functions
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">Counter Page</h1>

      <p className="mt-2">Current Count: {count}</p>

      <div className="flex flex-col items-center mt-4 space-y-2">
        <button onClick={handleIncrement}className="px-5 py-2 bg-pink-600 text-white rounded">Increment</button> 
        <button onClick={handleDecrement} className="px-4 py-2 bg-pink-600 text-white rounded">Decrement</button>
      </div>
    </div>
  );
}
