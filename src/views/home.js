import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import ProtectedRoute from "../auth/protected-route";


const Home = () => (
  <Fragment>
    {/*<ProtectedRoute component={Hero} />*/}
    <Hero />
    <hr />
    <HomeContent />
  </Fragment>
);

export default Home;
