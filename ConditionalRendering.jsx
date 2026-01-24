import React, {useState} from "react";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Welcome to the Joining Page</h1>
            {/* '?' when condition true and ':' when condition false */}
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}

            {isLoggedIn && <p>You're in Login State</p>}
        </div>
    )
}

// List 
function FootballPlayers() {
    const players = ['Ronaldo', 'Kaka', 'Ozil', 'Mbappe'];

    return (
        <div>
            <h3>Favorite Players:</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    )
}

function ConditionalRendering() {
    return (
        <>
            <LoginControl />
            <hr />
            <FootballPlayers />
        </>
    );
}

export default ConditionalRendering;