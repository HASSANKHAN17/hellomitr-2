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
function SignUp(props) {
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
        <h1>Create Your Account</h1>
        <p>Please fill all forms to continued</p>
        <form onSubmit={handleChange(onSubmit)}>
        <TextField className="textfield" id="outlined-basics" variant="outlined" label="Name" fullWidth />
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

        <FormControl className="textfield" sx={{width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmpassword}
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
            label="Confirm Password"
          />
        </FormControl>
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="By signing up, you agree to Terms & Condtion" />
        </FormGroup>
        <Button className="btn" variant="contained" type="submit">Sign Up</Button>
        </form>
        <div className="alreadyuser">
            <p>Already have an account? <span onClick={()=>props.history.push("login")}>LogIn</span></p>
        </div>
    </div>
  )
}

export default SignUp