// useState - Counter

import { useState } from "react";

function UseStateCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>useState Example</h2>
            <p>Click Counting: {count}</p>
            
            {/* update state when click the button */}
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseStateCounter;