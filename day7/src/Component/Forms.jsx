import axios from "axios";
import { useState } from "react";

export const Forms = () => {
  const [formdata, setFormData] = useState({
    username: "",
    age: "",
    email: ""
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formdata, [id]: value });
  };
  const handleSubmit=(e)=>{
   e.preventDefault();
   axios.post("http://localhost:3005/users", formdata).then(()=>{
    alert("created successfullly");
    setFormData({
        username:"",
        age:"",
        email:"",
    });
   });
  };
  return (
    <forms onSubmit={handleSubmit}>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        placeholder="username"
      />
      <input id="age" type="number" onChange={handleChange} placeholder="age" />
      <input id="age" type="text" onChange={handleChange} placeholder="email" />
      <input type="submit" value="submit" />
    </forms>
  );
};
