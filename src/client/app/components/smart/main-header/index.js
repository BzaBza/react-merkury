import React from 'react';
import DropDownButton from "../../dumb/dropdown-button/index";
import MainButton from "../../dumb/main-button/index";
import UserMenu from "../../dumb/user-menu/index";

class MainHeader extends React.Component {

    render() {
        return (
            <header className="col-md-11">
                <div className="d-flex justify-content-between  col-md-12 align-content-center">
                    <div className="d-flex">
                        <button type="button"/>
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