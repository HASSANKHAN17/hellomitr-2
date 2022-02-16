import React from 'react'
import "./Auth.scss"
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
function LogIn(props) {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmpassword:"",
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const onSubmit = (data)=>{

      }

  return (
    <div className="shadow authcontainer">
        <h1>Welcome To Hellomitr</h1>
        <p>Log in with email & password</p>
        <form onSubmit={handleChange(onSubmit)}>
        
        <TextField className="textfield" id="outlined-basics" variant="outlined" label="Email or Phone" fullWidth />
        <FormControl className="textfield" sx={{width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

       
        
        <Button className="btn" variant="contained" type="submit">LogIn</Button>
        </form>
        <div className="alreadyuser">
            <p>Forgot your password? <span onClick={()=>props.history.push("login")}>Reset</span></p>
        </div>
    </div>
  )
}

export default LogIn