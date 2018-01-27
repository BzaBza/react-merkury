import React from 'react';
import {render} from 'react-dom';
import { Router, Route } from 'react-router';


import createBrowserHistory from 'history/createBrowserHistory';
import Login from "./components/smart/login/index";
import Register from "./components/smart/register/index";
const customHistory = createBrowserHistory();

class App extends React.Component {
    render () {
        return(
            <Router history={customHistory}>
                <div>
                    <Route exact path ='/' component={Login}/>
                    <Route exact path ='/registration' component={Register}/>
                </div>
            </Router>
        )
    }
}

export default App;