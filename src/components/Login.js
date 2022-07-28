import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { notify } from "./toast";

import { validate } from "./validate.js";

import styles from "./SignUp.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "Login"));
  }, [data, touched]);

  const clickHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHndler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("u loged succesfully", "success");
    } else {
      notify("invlaid data");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}> Login </h1>

        <div className={styles.formField}>
          <label>Email:</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={clickHandler}
            onFocus={focusHndler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password:</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={clickHandler}
            onFocus={focusHndler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <Link to="/signUP">sign up</Link>

          <button type="submit"> login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
