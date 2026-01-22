// sending data to the Component

function Sender(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Role: {props.role}</h2>
      <h3>Home: {props.home}</h3>
      <h4>Favorite Writer: {props.writer}</h4>
    </div>
  )
}
function Receiver() {
  return(
    <div>
      <Sender name="Kabir" role="Learner" home="Rajshahi" writer="Stephen King"/>
    </div>
  )
}

export default Receiver