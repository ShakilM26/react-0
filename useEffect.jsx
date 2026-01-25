import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count Changed:', count)
    }, [count])

    return (
        <div>
            <h2>useEffect Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseEffect;