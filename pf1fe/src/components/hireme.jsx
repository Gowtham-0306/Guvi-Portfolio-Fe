import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from "@mui/material";
import styled from '@emotion/styled';
import { Navbar } from './navbar/navbar';
import { useLocation, useParams  } from 'react-router-dom';
import axios from "axios";


  // ...
const FormContainer = {
  "background-color": "grey",
  "display": "flex",
  "align-items": "center",
  "justify-content": "center",
  "flex-direction": "column",
  "padding": "32px",
  "border-radius": "8px",
  "box-shadow": "0px 3px 6px rgba(0, 0, 0, 0.16)",
  "max-width": "500px",
 
  "margin": "0 auto",
  

};


const FormField = styled(TextField)`
  margin: 16px 0;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin: 16px 0;
`;

export default function Hireme() {
  const [isanyfieldempty , setisanyfieldempty] = useState(false);
  const [issubmitted , setissubmitted] = useState(false);
 
  const [userCredentials, setUserCredentials] = useState({
    Username: '',
    email: '',
    phonenumber: '',
    Projectdetails : ''
  });

  const [errors, setErrors] = useState({
    Username: false,
    email: false,
    phonenumber: false,
    Projectdetails : false
  });

  const handleChange = (event) => {
    setisanyfieldempty(false);
    const { name, value } = event.target;
  
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  
   

    if (value.length > 0) {
      console.log(`hitttt 4`);
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const  handleSubmit =  async (event) => {

console.log(`test`);

    
  if(userCredentials.Username.length > 0 && userCredentials.email.length > 0 &&
    userCredentials.Projectdetails.length > 0 && userCredentials.phonenumber.length > 0 ){

const response = await axios.post('https://guvi-portfolio-1.onrender.com/senduserdetails', { ...userCredentials});
   
console.log(response.status);

if(response.status === 200){
  console.log(`hit iside`);
  setissubmitted(true);
  setUserCredentials(
    {
      ...userCredentials,
      Username: '',
      email: '',
      phonenumber: '',
      Projectdetails : ''}
  
  )
  
  

  

}





    }
  
   
   
    
    if(userCredentials.Projectdetails.length === 0){


      setErrors({...errors , Projectdetails : true})
    }if(userCredentials.phonenumber.length === 0){


      setErrors({...errors , phonenumber : true})

    }
    if(userCredentials.email.length === 0){


      setErrors({...errors , email : true})
    }
    
    if(userCredentials.Username.length === 0){


      setErrors({...errors , Username : true})
    }
  
  };

  return (
    

<Grid >
<Navbar/>
<Grid container sx={12} style={{"backgroundColor" : "black" , "height" : "60px" , "textAlign" : "center",
  "display" : "flex",
"alignItems" : "center" , "justifyContent" : "center" ,
}}>





   
        
        </Grid>
    
      <Grid container style={FormContainer}>

{ isanyfieldempty
 ? (<Typography style={{"color" : "red"}}>

please Enter all the required details !
</Typography>) : ''


}


     
<Typography  variant='h6' style={{  "textAlign" : "center" , "color" : "white"
, "fontFamily" : "revert-layer"



}}>
      { issubmitted ? "" : "Thank you for considering me. Please enter your details below" }


      
      </Typography>


      <Typography  variant='h6' style={{  "textAlign" : "center" , "color" : "green",
        "fontFamily" : "revert-layer"
      }}>
{ issubmitted ?  
"Thank you for entering the details . Will contact you soon!" :
"" 



}




      
      </Typography>





      
        <FormField
          autoFocus
          required
          margin="dense"
          id="username"
          name="Username"
          label="Name"
          variant="standard"
          onChange={handleChange}
          error={errors.Username}
          value={userCredentials.Username}
          helperText={errors.Username ? 'Username is required' : ''}
        />
        <FormField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="standard"
          onChange={handleChange}
          value={userCredentials.email}
          error={errors.email}
          helperText={errors.email ? 'Email is required' : ''}
        />
        <FormField
          required
          margin="dense"
          id="phonenumber"
          name="phonenumber"
          label="Phone Number"
          type="number"
          variant="standard"
          onChange={handleChange}
          value={userCredentials.phonenumber}
          error={errors.phonenumber}
          helperText={errors.phonenumber ? 'Phone number is required' : ''}
        />
         <FormField
          autoFocus
          required
          margin="dense"
          id="Projectdetails"
          name="Projectdetails"
          label="Project-details"
          variant="standard"
          onChange={handleChange}
          error={errors.Projectdetails}
          value={userCredentials.Projectdetails}
          helperText={errors.Projectdetails ? 'Projectdetails is required' : ''}
        />
    
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={()=>{

            handleSubmit();
          }}
          style={{"backgroundColor" : "black"}}
        >
          Submit
        </SubmitButton>
      </Grid>
    </Grid>
  );
}
