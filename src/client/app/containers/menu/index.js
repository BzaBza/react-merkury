import React from 'react';
import Navigation from "../../components/smart/navigation/index";
import MainHeader from "../../components/smart/main-header/index";


class Menus extends React.Component {


    render() {
        return (
            <div className="d-flex">
                <Navigation/>
                <MainHeader/>
            </div>
        )
    }
}

export default Menus;