import { useState } from "react";

function ScoreBoard() {
    const [goals, setGoals] = useState(0);

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Match Day: Bangladesh</h1>

            <p>Total Goals: {goals}</p>
            <button onClick={() => setGoals(goals+1)} style={{backgroundColor: '#03AC13'}}>Score</button>

            <button onClick={() => setGoals(goals-1)} style={{marginLeft: '10px', background: '#D21404'}}>Disallowed</button>

            <button onClick={() => setGoals(0)} style={{marginLeft: '10px'}}>
                Reset Match
            </button>
        </div>
    );
}
export default ScoreBoard;