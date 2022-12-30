import { useState } from "react";
export const Index = () => {

   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const[ number, setNumber]= useState()
   const [data, setData] = useState([])

   const handleSave = () => {
    const newDAta = {firstName,lastName,number }
    
    // console.log("data", newDAta)
    // setData(oldArray => [...oldArray, newDAta])
         setData( prevData =>[...prevData, newDAta]);
   }
    return (
       <>
            <label htmlFor="fname">First Name - </label>
            <input type="text" placeholder="Enter your First Name" name="fname"   onChange={(e) => setFirstName(e.target.value)}/>
            <br/>
            <label htmlFor="fname">Last Name - </label>
            <input type="text" placeholder="Enter your First Name" name="lname"   onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <label htmlFor="phone">Last Name - </label>
            <input type="text" placeholder="Enter your Number" name="phone"   onChange={(e) =>setNumber(e.target.value)} />
            <br/>
           <button onClick={handleSave}>Submit</button>

           {
            data && data.map((e)=>{
                return (
                    <h1>{e.firstName} {e.lastName} {e.number}</h1>
                );
            })
           }
            {/* <label htmlFor="lname">Last Name - </label>
            <input type="text" placeholder="Enter your Last Name" name="lname" onChange={(e) =>{
                console.log(e.target.value);
            }}/>
            <br/>
            <label htmlFor="phone">Phone Number - </label>
            <input type="text" placeholder="Enter your Number" name="phone" onChange={(e)=>{
                console.log(e.target.value);
            }}/>
            <br/>
            <label htmlFor="email">Email - </label>
            <input type="email" placeholder="Enter your Email " name="email" onChange={(e) =>{
                console.log(e.target.value);
            }}/>
            <br/>
            <label htmlFor="gender">Gender - </label>
            <select name="gender" id="" >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select >
            <br/>
             <label htmlFor="city">Select City - </label>
             <select name="city" id="">
                <option value="">Select City</option>
                <option value="pithampur">pithampur</option>
                <option value="indore">indore</option>
                <option value="manpur">manpur</option>
                <option value="dhar">dhar</option>
                <option value="mhow">mhow</option>
             </select>
             <br/>
             <input type="submit" onClick={() =>{
                console.log();
             }}/> */}
      
        </>
    );
};