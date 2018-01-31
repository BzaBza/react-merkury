import React from 'react';
import Login from "../../components/smart/login/index";
import Register from "../../components/smart/register/index";

import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';


const customHistory = createBrowserHistory();

class Authentication extends React.Component {

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <Router history={customHistory}>
                        <Switch>
                            <Route exact  path ='/login' component={Login}/>
                            <Route path ='/register' component={Register}/>
                        </Switch>
                    </Router>
                </div>
            </section>
        )
    }
}

export default Authentication;