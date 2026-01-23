// Event Handling

function SimpleEvent(){
  const handleClick = () => {
    alert();
  };
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default SimpleEvent;

// ******************************************
// ******************************************

// class ClassEvent extends Component {
//   handleClick = () =>{
//     alert();
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>Class Button</button>
//     )
//   }
// }

// export default ClassEvent;

// ******************************************
// ******************************************

// function ParameterEvent() {
//   const sayHello = (name) => {
//     alert('Hello ' + name);
//   };
//   return (
//     <div>
//       <button onClick={() => sayHello('Kabir')}>This is My Name</button>
//     </div>
//   );
// }

// export default ParameterEvent;

// *********************************************
// *********************************************
