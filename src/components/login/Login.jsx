import React, { useState } from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';
import classes from './Login.module.css';


export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    localStorage.setItem('name',event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <section>
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <h1 className={classes.header}>LOGIN</h1>
        <div className={classes.control}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
    </section>
  );
}
