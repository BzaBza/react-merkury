import React from 'react';
import DropDownButton from "../dropdown-button/index";
import MainButton from "../main-button/index";
import UserMenu from "../user-menu/index";



class MainHeader extends React.Component {
    render() {
        return (
            <header className="container">
                <div className="d-flex justify-content-between  col-md-12 align-content-center">
                    <div className="d-flex">
                        <button/>
                        <DropDownButton/>
                    </div>
                    <div className="d-flex">
                        <MainButton value="+ Add project"/>
                        <button>message</button>
                        <button>bell</button>
                        <UserMenu/>
                    </div>
                </div>
            </header>
        )
    }
}

export default MainHeader;