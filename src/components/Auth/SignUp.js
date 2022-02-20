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
import { useForm } from 'react-hook-form';
import WooCommerceAPI from 'woocommerce-api'
function SignUp(props) {
  const {handleSubmit,register,formState:{errors},setError}=useForm()
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

      const onSubmit = (formdata)=>{
        var WooCommerce = new WooCommerceAPI({
          url: 'https://shop.hellomitr.com/',
          consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
          consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
          wpAPI: true,
          version: 'wc/v1'
        });
        console.log(formdata)
        if(values.password!==values.confirmpassword || values.password==="" || values.password===""){
          setError("password")
          setError("confirmPassword")
        }else{
          const data = {
            email: formdata.email,
            first_name: formdata.name,
            password:values.password,
            last_name: "",
            username: "",
            billing: {
              first_name: formdata.name,
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
              email: formdata.email,
              phone: formdata.phone
            },
            shipping: {
              first_name: formdata.name,
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: ""
            }
          };
          console.log(data)
          WooCommerce.postAsync("customers", data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response);
          });

        }
      }

  return (
    <div className="shadow authcontainer">
        <h1>Create Your Account</h1>
        <p>Please fill all forms to continued</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('name',{required:true})}  error={errors.name?true:false} className="textfield" id="outlined-basics" variant="outlined" label="Name" fullWidth />
        <TextField {...register('email',{required:true})} error={errors.email?true:false}  className="textfield" id="outlined-basics" variant="outlined" label="Email" fullWidth />
        <TextField {...register('phone',{required:true})} error={errors.phone?true:false}  className="textfield" id="outlined-basics" variant="outlined" label="Phone" fullWidth />
        {/* <TextField className="textfield" id="outlined-basics" variant="outlined" label="Address" fullWidth />
        <TextField className="textfield" id="outlined-basics" variant="outlined" label="City" fullWidth />
        <TextField className="textfield" id="outlined-basics" variant="outlined" label="State" fullWidth />
        <TextField className="textfield" id="outlined-basics" variant="outlined" label="Postcode" fullWidth /> */}
        <FormControl className="textfield" sx={{width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          error={errors.password?true:false}
          {...register('password',{required:true})}
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
          {...register('confirmPassword',{required:true})}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmpassword}
            error={errors.confirmPassword?true:false}
            onChange={handleChange('confirmpassword')}
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