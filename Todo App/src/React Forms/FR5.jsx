// creat app which contain forms with the fields name email password and confirm password when the form subbmited the values of password and confirm password must be saved else it will give alert msg if the form submmited succesfully then display enter name and email id in alert box.
import React, { useState } from 'react' 
function FR5 () { 
  const[formdata,setformdata]=useState({}); 

    function handlechange(event){ 
    const name = event.target.name; 
    const value = event.target.value; 
    setformdata({...formdata, [name]: value}) 
    } 

    function handlesubmit(e){ 
        e.preventDefault(); 
        const emailregex=/^([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$)/; 
        const passregex=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/; 
        if(!emailregex.test(formdata.eid)) 
          { 
        alert("Please enter a valid Email ID"); 
        } 
        else if(!passregex.test(formdata.pass)) 
        { 
        alert("Password must contain atleast 8 characters ( Atleast 1 digit ,1 lowercase & 1 uppercase alphabets )"); 
        } 
        else if(formdata.pass !== formdata.cpass){ 
        alert("password and confirm password must be same"); 
        } 
        else{ 
        alert("Your form has been submitted.\nEmail: " + formdata.eid ) 
        } 
    } 
 
    return ( 
        <div> 
        <form onSubmit={handlesubmit}> 
        
            <label>Email Id:</label> 
            <input type="email" name="eid" onChange={handlechange} /><br/> 

            <label>Password:</label> 
            <input type="password" name="pass" onChange={handlechange}/><br/> 

            <label>Confirm Password:</label> 
            <input type="password" name="cpass" onChange={handlechange} /><br/> 
            
            <button type="submit">Submit</button> <br/> 
          </form> 
        </div> 
    ) 
} 
export default FR5;