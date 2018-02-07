import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Login from "../../components/smart/login/index";
import Register from "../../components/smart/register/index";


class Authentication extends React.Component {

    render() {
        return (
            <HashRouter>
                <section className="authentication-background d-flex justify-content-center align-items-center">
                    <div className="authentication-wrap col-md-6">
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path='/registration' component={Register}/>
                        </Switch>
                    </div>
                </section>
            </HashRouter>
        )
    }
}

export default Authentication;