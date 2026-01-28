import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../firebase/auth";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      {error && <p style={{color: 'red'}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name}
        onChange={(e) => setName(e.target.value)}/>
        <br/>

        <input type='email' placeholder='Email' value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <br/>

        <input type='password' placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <br/>

        <button type='submit'>Signup</button>
      </form>

      <p>Already have an account? <Link to='/'>Login</Link>
      </p>
    </div>
  );
}

export default Signup;