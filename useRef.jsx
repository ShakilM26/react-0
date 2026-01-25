import { useRef } from "react";

function InputFocus() {
    const inputRef = useRef(null)

    // input field
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef}/>
            {/* changing the value will not re-render */}
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default InputFocus;