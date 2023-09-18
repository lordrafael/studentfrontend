import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container , Paper } from '@mui/material';
import Button from '@mui/material/Button';

export default function Student() {
  
const paperStyle = {padding:'50px 20px', width:600, margin:'20px auto'};

const[name, setName] = React.useState('Rafael')

const [address, setAddress] = React.useState('Shyamoli')

const handleClick=(e) => {
  e.preventDefault()
  const student={name, address}
  console.log(student)
};
  
  
  return (
    
    <Container>

      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:'blue'}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    > 
  
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      /> 
  
      <Button variant="contained" onClick={	handleClick}> Submit</Button>
      {name} 
      {address}
    </Box>
    </Paper>
    </Container>
  );
} 
