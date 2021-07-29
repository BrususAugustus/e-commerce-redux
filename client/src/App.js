import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/header.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalSyle } from "./global.styles";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

//Lazy Loading // Chunks
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

//For updating firebase
// import {addCollectionAndDocuments} from "./firebase/firebase.utils";
// import {selectCollectionForPreview} from "./redux/shop/shop.selector"

const App = ({ checkUserSession, currentUser }) => {
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

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalSyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={Checkout} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //For updating firebase
  // collections: selectCollectionForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
