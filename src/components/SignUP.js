import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {   ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';

import { validate } from './validate.js';

import styles from "./SignUp.module.css";
const SignUP = () => {
    const [data, setData] = useState ({
            name:"",
            email:"",
            password:"",
            confirmpassword:"",
            isAccept: false
        }
    )
   
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState ({});
     
    useEffect(()=>{
        setErrors (validate(data, "SignUP"))
    },[data , touched])
    
    const clickHandler = (event) => {
        if (event.target.name === "isAccept"){        
        setData ( {...data,[event.target.name] : event.target.checked})
        }else {
            setData( {...data,[event.target.name] : event.target.value})
        }
    }
    const focusHndler = (event) =>{
        setTouched({...touched, [event.target.name]: true})
    }
    
    const submitHandler = event =>{
        event.preventDefault();
        
        if (!Object.keys(errors).length){
        notify ("u signed succesfully" , "success")
 
         }else {
             notify ("invlaid data") 
             setTouched({
                 name :true,
                 email: true,
                 password: true,
                 confirmpassword : true,
                 isAccept :true
             })
         }
    } 
     useEffect (()=>{
        document.title = "SignUP"
     },[])
    return (
        <div className={styles.container}>

            <form onSubmit={submitHandler} className={styles.formContainer}>

            <h1 className={styles.header}>sign up </h1>
            <div className={styles.formField}>
                <label>Name:</label>
                <input className={errors.name && touched.name ? styles.uncompleted  : styles.formInput }
                 type="text" name='name' value={data.name} onChange={clickHandler} onFocus={focusHndler}/>
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div className={styles.formField}>
                <label>Email:</label>
                <input
                 className={errors.email && touched.email ? styles.uncompleted  : styles.formInput }
                type="text" name='email' value={data.email} onChange={clickHandler} onFocus={focusHndler}/>
                {errors.email && touched.email && <span>{errors.email}</span>}
            </div>
             <div className={styles.formField}>
                <label>Password:</label>
                <input 
                 className={errors.password && touched.password ? styles.uncompleted  : styles.formInput }

                 type="password" name='password' value={data.password} onChange={clickHandler} onFocus={focusHndler}/>
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div> 
            <div className={styles.formField}>
                <label>ConfirmPassword:</label>
                <input 
                 className={errors.confirmpassword && touched.confirmpassword ? styles.uncompleted  : styles.formInput }
                 type="password" name='confirmpassword' value={data.confirmpassword} onChange={clickHandler} onFocus={focusHndler}/>
                {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}

            </div>
            <div className={styles.formField}>
                 <div className={styles.checkBoxContainer}>
                    <label>I accept policy:</label>
                    <input 
                    className={errors.isAccept && touched.isAccept ? styles.uncompleted  : styles.formInput }
                    type="checkbox" name='isAccept' value={data.isAccept} onChange={clickHandler} onFocus={focusHndler}/>
                    </div>
                {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span>}
            </div>
            <div className={styles.formButtons }>
                <Link to="/Login">login</Link>
                <button type='submit'>sign up</button>
            </div>

            </form>
            <ToastContainer />

        </div>
    );
};
       

export default SignUP;
