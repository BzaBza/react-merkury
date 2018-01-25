import React from 'react';
import {render} from 'react-dom';
import Login from "./components/smart/login/index";
import Authentication from "./containers/authentication/authentication";

class App extends React.Component {
    render () {
        return(
            <div>
               <Authentication/>
            </div>
        )
    }
}

export default App;