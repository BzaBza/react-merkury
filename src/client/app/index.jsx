import './main.sass';
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/avasomeComponent';

class App extends React.Component {
    render () {
        return(
            <div>
                <p> Hello React project</p>;
                <AwesomeComponent />
            </div>
        )
    }
}

render(<App/>, document.querySelector('.app'));