import React, { useState, useEffect } from 'react';

import Login from './components/login/Login';
// import Home from './components/Home/Home';
import MainHeader from './components/mainHeader/MainHeader';
import AuthContext from './context/AuthContext';
import TodoApp from './TodoApp';


/** Login app */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    console.log('calling useEffect');
    const isLogin = localStorage.setItem('isLogin',0);
    if(isLogin === '1'){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  },[]);

  const loginHandler = () => {
    localStorage.setItem('isLogin','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLogin','0');
    setIsLoggedIn(false);
    localStorage.setItem('name','');
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <TodoApp onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
