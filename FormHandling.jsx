import React, {useState} from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div style={{padding: '20px'}}>
      <h3>Wirte name:</h3>

      <input 
      // 'onChange' when user type, state will be updated
      type="text" value={name} onChange={(e) => setName(e.target.value)}
      placeholder="" />

      <p>Type: <b>{name}</b></p>
    </div>
  )
}

export default SimpleForm;