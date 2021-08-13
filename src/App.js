import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-signup/Signin-signup';
import { auth, createUserinDataBase } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth;

  useEffect(() => {
    //(1)hena hn3ml mora2eb l state bat3t el user lw signinorout bl onAuthStateChanged
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //(2)hena hngeb el data mn sign in bta3 google(2w 2y no3 mn el sign in) lw 3aml sign in w b3d kda n7otha fl database bt3tna
        const docRef = await createUserinDataBase(userAuth);

        //(3) hena b3d ma 7tana el data fl database bt3tna 3yzen b2a ngbha mn el data base deh 3shan n7tha fl state bta3t el app bt3na w nst3mlha.
        docRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
    //lma y3ml unmount 3ayz 2sheel el connection ele byfdl 3mlo el firebase lma 23ml onAuthStateChanged, 3shan hwa kda byfdl mra2eb el user hal hwa sign in wala out 3ltool.
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  console.log(currentUser);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
