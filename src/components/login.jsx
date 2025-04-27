// LoginForm.jsx
import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
import Eye from '../assets/eye-solid.svg?react'
import ClosedEye from '../assets/eye-slash-solid.svg?react'
import { useSelector, useDispatch } from 'react-redux';
import { setTrue, setFalse, toggle } from '../store/storeSlice';
import GitHub from '../assets/github-brands.svg?react'
import Google from '../assets/google-brands.svg?react'
import Twitter from '../assets/x-twitter-brands.svg?react'


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const myBoolean = useSelector((state) => state.globalState.myBoolean);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const Switch = () => {
    dispatch(toggle());
    console.log(myBoolean)

  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle login logic here
  };

  return (
    <div style={{...styles.container , marginLeft: `${!myBoolean ? '50px' : '500px'}`, }}>
      {!myBoolean ? <h2 style={styles.title}>Login</h2> : <h2 style={styles.title}>Sign In</h2>}
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        {/* Email Input */}
        <div style={styles.inputGroup}>

          <input
            style={styles.input}
            type="email"
            placeholder="Email...."
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              }
            })}
          />
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}
        </div>

        {/* Password Input */}
        <div style={styles.inputGroup}>
          
          <input
            style={styles.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password...."
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              }
            })}
          />

<button 
        type="button" 
        onMouseDown={togglePassword}
        onMouseUp={togglePassword}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {showPassword ? <ClosedEye/>: <Eye/>}
      </button>
          {errors.password && <span style={styles.error}>{errors.password.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className='submit-button' style = {styles.button}>Login</button>
      </form>
      <div className='signin'>{!myBoolean?<div className='signin'><p>New here?</p><p><a href='#' onClick={Switch}>sign in</a></p></div> : <p>sign in using these</p> }</div>
      {myBoolean ? <div className='socials'>
        <a href='#'><GitHub/></a>
        <a href='#'><Google/></a>
        <a href='#'><Twitter/></a> </div> : ''}
    </div>

    
  );
};

export default LoginForm;

// Simple inline CSS styles
const styles = {
  container: {
    width: '300px',
    padding: '20px',
    transition: 'margin-left 0.5s ease-in',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',


  },
  title: {
    textAlign: 'center',
    marginBottom: '0px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },

  button:{
    margin: '10px auto',
    width: '50%' , 
    
  }
 
};
