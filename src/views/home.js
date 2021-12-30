import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import ProtectedRoute from "../auth/protected-route";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";



const Home = () => {
  const { isAuthenticated, } = useAuth0();

  return(
  <Fragment>
    {/*<ProtectedRoute component={Hero} />*/},
    {(isAuthenticated) ?  <Hero />: <div> You are currently logged out or user is not authorized for this system. Please login with an authorized user. </div>}
    {/*<Hero />
    <hr />*/}
    <HomeContent />
  </Fragment>
  );
};

/*
export default withAuthenticationRequired(Home, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});*/

export default Home;
