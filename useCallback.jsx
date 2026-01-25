import { useCallback } from "react";

 function UseCallback({onCLick}) {
    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, [])

    return (
        <div>
            <h2>Example of useCallback</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    )
 }

 export default UseCallback;