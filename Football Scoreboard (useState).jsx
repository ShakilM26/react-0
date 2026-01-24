import React, {useState} from "react";

function ScoreBoard() {
  const [goal, setGoal] = useState(0); // state declare

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Football ScoreBoard</h1>

      {/* initial state */}
      <h2>Number of Goals: {goal}</h2> 

      {/* goal increment */}
      <button onClick={() => setGoal(goal+1)}>Score Goal</button>

      {/* goal decrement*/}
      <button onClick={() => setGoal(goal-1)} style={{marginTop:'10px'}}>Disallowed Goal</button>
    </div>
  )
}

export default ScoreBoard;