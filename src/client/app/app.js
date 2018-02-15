import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import Login from "./components/smart/login/index";
import Register from "./components/smart/register/index";
import HomePage from "./containers/home-page/index";
import Calendar from "./containers/calendar/index";
import Settings from "./containers/settings/index";
import Statistics from "./containers/statistics/index";
import Users from "./containers/users/index";
import Workflow from "./containers/workfow/index";
import Menus from "./containers/menu/index";
const customHistory = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        };
        this.setRootUserData = this.setRootUserData.bind(this);
    }

    setRootUserData(userData){
        this.setState({ userData: userData});
    }

    render() {

        return (
            <Router history={customHistory}>
                <div className="d-flex">
                    <Switch>
                        <Route exact path='/' render={(routeProps)=><Login routeProps={routeProps} setRootUserData={this.setRootUserData}/>}/>
                        <Route path='/registration' component={Register}/>
                        <Menus/>
                    </Switch>

                    <Switch>
                        <Route path='/home' render={(routeProps)=><HomePage routeProps={routeProps} userData={this.state.userData}/>}/>
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