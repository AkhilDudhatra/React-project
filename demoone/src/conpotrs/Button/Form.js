import "./Form.css";
import{useState} from"react";
import React from "react";

// import{useForm} from "raect-hook-form";

const Form=()=>{

    const [userRegistration,setUserRegistration]=useState({
        username:"", email:"",phone:"",password:""
      });
      
      const [records,setRecords]=useState([]);
      
      const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
      
        setUserRegistration({...userRegistration,[name]:value})
      }
      
      const handlesubmit=(e)=>{
        e.preventDefault();
      
        const newRecord= {...userRegistration, id:new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
      
        setUserRegistration({username:"",email:"",phone:"",Address:""})
      
      }
    return(

        <>
        <h1 className="header">Registration Form</h1>
        <form className="Main" onSubmit={handlesubmit}>
        <div>
          <label htmlFor="username">Fullname:</label>
          <input type="text" name="username" autoComplete='off'
          value={userRegistration.username}
          onChange={handleInput}
          id="username" />
        </div>
  
        <div>
          <label htmlFor="email">email:</label>
          <input type="email" name="email" autoComplete='off'
          value={userRegistration.email}
          onChange={handleInput}
          id="email" />
        </div>
  
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" max={10} autoComplete='off'
          value={userRegistration.phone}
          onChange={handleInput}
          id="phone" />
        </div>
  
        <div>
          <label htmlFor="Address">Address:</label>
          <input type="Address" name="Address"  autoComplete='off'
          value={userRegistration.Address}
          onChange={handleInput}
          id="Address" />
        </div><br/>
  
        <button type='Submit' className="btn">Submit</button>
        
      </form> 
  
       <div>
        {
          records.map((curElem)=>{
            return(
              <div className='showdataStyle'>
                <p> {curElem.username}  {curElem.email} {curElem.phone}  {curElem.Address}</p>
              </div>
            )
          })
        }
      </div> 
      </>

        
    )
}

export default Form;