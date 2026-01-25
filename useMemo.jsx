import { useMemo } from "react";

function UseMemo(){
    const square = useMemo(() =>{
        return 10*10;
    }, []);

    return <p>Result: {square}</p>
}

export default UseMemo; 