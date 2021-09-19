import React from 'react';

import Card from '../login/Card';
import './Home.module.css';

const Home = (props) => {
  return (
    <Card className="home">
      <h1>Welcome back!</h1>
      <button onClick={props.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
