import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../firebase/auth";

function Login() {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Event Handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // page relode off

    try {
          await login(email, password);
          navigate("/playlists");
        } catch (err) {
          console.log(err.code, err.message);
          setError(err.message);
        }
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{color: 'red'}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <br />

        <button type='submit'>Login</button>
      </form>

      <p>
        New User? <Link to="/signup">Signup Here</Link>
      </p>
    </div>
  );
}

export default Login;