// import logo from './logo.svg';
import './App.css';
import Button from './conpotrs/Button/Button';
import { Person } from './conpotrs/Button/Person'; 
import { useState, useEffect } from 'react'
import Form from './conpotrs/Button/Form';

function App() {
  //  var a = ["Akhil" , "jay", "ravi", "Darshit"]
  // var dhoni = [
  //   {
  //     Name: "Mahendra Singh Pansingh Dhoni",
  //     Age: "40 years",
  //     birthday: "7 July 1981",
  //     Net_worth: "$113 Million",
  //   }]

  // const [value, setvalue] = useState(0)
  // const add = () => {
  //   setvalue(value + 10)
  // }
  // let less = () => {
  //   setvalue(value - 10)
  // }
  // useEffect(() => {
  //   console.log(value)
  // }, [value])

  return (
    // <div className="App">

    //   {/* {a.map ((item) => <p> {item}</p>)}  */}

    //   <Button title={'Akhil'} color={'primeri'} /> <br />
    //   <Button title={'dev'} color={'primeri1'} /> <br />
    //   <Button title={'Rohan'} color={'primeri2'} /> <br />
    //   <Button title={'Darshit'} color={'primeri3'} />

    //   {Person.length==0 && Person.map((item) => {
    //     return <p>My Name is {item.Name}. My Age is {item.Age}. My DOB is {item.birthday} and My Networth is {item.Net_worth}</p>
    //   }
    //   )}

    //  {value}
    //  <button onClick={() => add()}>Add</button> 
    //  <button onClick={() => less()}>less</button>
    // </div>
    <div className="App">
      <h1 className="head">Form</h1>
      <Form />
    </div>

  );
}

export default App;
