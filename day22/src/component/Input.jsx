import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Input.css'
 function  Input() {
  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="First Name"
          placeholder="Enter Your First Name"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Last Name"
          placeholder="Enter Your Last Name"
        />
      </div>  
      <div>
        <TextField
          error
          id="outlined-error"
          label="Phone Number"
          placeholder="Enter Your Number"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Email"
          placeholder="Enter Your Email"
        />
      </div>  
      <div>
        <TextField
          error
          id="outlined-error"
          label="Password"
          placeholder="Enter Your Password"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Confirm Password"
          placeholder="Enter Your Confirm Password"
        />
      </div> 
      <textarea className='area'placeholder=' Message' >
       
      </textarea>
    </Box>
    <input className='submit' type="submit" />
    </>
  );
};

export default Input;