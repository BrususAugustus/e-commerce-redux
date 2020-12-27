import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";


import Header from "./components/header/header.component";

//For updating firebase
// import {addCollectionAndDocuments} from "./firebase/firebase.utils";
// import {selectCollectionForPreview} from "./redux/shop/shop.selector"

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import {checkUserSession} from "./redux/user/user.actions";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {


    //Checks user's session
    const {checkUserSession} = this.props;
    checkUserSession();



    //For updating firebase inser 'collections' into the props

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   }
      
    //   setCurrentUser(userAuth);
      //For updating firebase
      // addCollectionAndDocuments("collections", collections.map( ({title, items}) => ({title,items}) )  )
    
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout}/>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  //For updating firebase
  // collections: selectCollectionForPreview

});

const mapDispatchToProps = dispatch =>({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
