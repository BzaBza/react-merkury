import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import HomePage from "./containers/home-page/index";
import Calendar from "./containers/calendar/index";
import Settings from "./containers/settings/index";
import Statistics from "./containers/statistics/index";
import Users from "./containers/users/index";
import Workflow from "./containers/workfow/index";
import Navigation from "./components/smart/navigation/index";
import MainHeader from "./components/smart/main-header/index";
import Sign from "./containers/sign/index";
const customHistory = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };
        this.setUserData = this.setUserData.bind(this);
    }

    setUserData(userData) {
        this.setState({userData: userData});
    }

    render() {

        return (
            <Router history={customHistory}>
                <div className="d-flex">
                        <Route exact path='/' render={(routeProps) => <Sign routeProps={routeProps}
                                                                            setUserData={this.setUserData}/>}/>
                    <Route strict path='/:page' component={Navigation}/>
                    <Route strict path='/:page' component={MainHeader}/>
                    <Switch>
                        <Route path='/home' render={(routeProps) => <HomePage routeProps={routeProps}
                                                                              userData={this.state.userData}/>}/>
                        <Route path='/calendar' component={Calendar}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/statistics' component={Statistics}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/workflow' component={Workflow}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;