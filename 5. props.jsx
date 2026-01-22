import React from "react";

function WelcomeMessage(props){
  return <h2>Welcome! {props.name}! {props.home}</h2>
}

function App(){
  return (
    <div>
      <h1>Example of Props</h1>
      {/* calling components (WelcomeMessage) and sends data*/} 
      <WelcomeMessage name='Shakil' home='Rajshahi'/>
      <WelcomeMessage name='Kabir' home='Rajshahi'/>
    </div>
  )
}

export default App;