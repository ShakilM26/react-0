import React, {useReducer} from "react";

// initial State
const initialState = {
    score: 0, isMatchLive: false, 
    message: "The Match hasn't started yet"
};

function reducer(state, action){
    switch (action.type) {
        case 'START_MATCH':
            return { ...state, isMatchLive: true, message: "Kickoff! Match is Live."};
        case 'GOAL_SCORED':
            return { ...state, score: state.score + 1, message: "GOAAAAALLLLL"};
        case 'END_MATCH':
            return { ... state, isMatchLive: false, message: "Full Time!"}
        case 'RESET':
            return initialState;
    }
}

function FootballMatch() {
    // dispatch: sending action
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h2>Stadium: Bashundhara Kings Arena</h2>
            <h3>Status: {state.message}</h3>
            <h1>Score: {state.score}</h1>

            {!state.isMatchLive ? (
                <button onClick={() => dispatch({type: 'START_MATCH'})}>Start Match</button>
            ) : (
                <>
                    <button onClick={() => dispatch({type: 'GOAL_SCORED'})}>Score Goal</button>
                    <button onClick={() => dispatch({type: 'END_MATCH'})} style={{marginLeft: '10px'}}>
                        End Match
                    </button>
                </>
            )}
            <button onClick={() => dispatch({type: 'RESET'})} 
            style={{display: 'block', margin: '20px auto'}}>
                Reset System
            </button>
        </div>
    );
}

export default FootballMatch;