import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import  { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import  { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount () {
    const {setCurrentUser} = this.props;
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
            <Route exact path='/checkout' component = {CheckoutPage} />
            <Route exact  path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)}/>
          </Switch>
        </BrowserRouter>
        
      </div>
        
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => ( dispatch(setCurrentUser(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
