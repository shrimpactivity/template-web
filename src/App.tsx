import { useState } from "react";
import frog from "/test-image.png";
import frog2 from "/test-image2.png";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="flex justify-center p-10">
      <div>
        <div className="flex justify-center">
          <img
            className={count % 2 === 0 ? "" : "rotate-180"}
            src={count < 20 ? frog : frog2}
            width="150px"
          />
        </div>
        <div className="text-center py-2">Count is {count}</div>
        <div className="flex justify-center">
          <button onClick={handleClick}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
