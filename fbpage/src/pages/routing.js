import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './homepage';
import Loginscreen from './loginscreen';
import Signupscreen from './signupscreen';
const Routing = () => {
    return (
        <div>
            <Route path="" exact component={Homepage} />
            <Route path="/loginscreen" exact component={Loginscreen} />
            <Route path="/signupscreen" exact component={Signupscreen} />
        </div>
    );

}

export default Routing;
