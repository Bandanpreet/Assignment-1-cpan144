//One of the three components
import { useState } from "react";

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  // Event handler function
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleToggle}className="px-160 py-2 bg-pink-500 text-white rounded">{show ? "Hide" : "Show"} Message</button>
      
      {show && <p className="mt-2 text-white-600">Hi! I’m Bandanpreet, a student and aspiring web developer. I enjoy learning new technologies and building projects that are both fun and useful.In my free time, I love baking and reading. I hope everyone enjoys life more fully!</p>}
    </div>
  );
}
