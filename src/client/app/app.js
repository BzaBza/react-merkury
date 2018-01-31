import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';
import Login from "./components/smart/login/index";
import Register from "./components/smart/register/index";
import HomePage from "./containers/home-page/index";
import Calendar from "./containers/calendar/index";
import Settings from "./containers/settings/index";
import Statistics from "./containers/statistics/index";
import Users from "./containers/users/index";
import Workflow from "./containers/workfow/index";
import Navigation from "./components/smart/navigation/index";
const customHistory = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route exact path='/' component={Login}/>
                    <Route path='/registration' component={Register}/>
                    <Navigation/>
                    <Switch>
                        <Route path='/home' component={HomePage}/>
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