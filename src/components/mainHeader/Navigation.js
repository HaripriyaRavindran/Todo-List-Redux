import React, { useContext } from 'react';

import classes from './Navigation.module.css';

import AuthContext from './../../context/AuthContext';

const name = () =>{
  console.log(localStorage.getItem('name'));
return(
localStorage.getItem('name')
)};

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li className="name">
            Hii {name()} !!
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
