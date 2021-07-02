import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import  { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount () {
    const {setCurrentUser} = this.props;
    console.log(this.props);
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount () {
    this.unSubscribeFromAuth();
  }
  

  render () {
    return (
      <div>
        
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component = {HomePage} />
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
        </BrowserRouter>
        
      </div>
        
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => (console.log(user), dispatch(setCurrentUser(user)))
})

export default connect(null, mapDispatchToProps)(App);
