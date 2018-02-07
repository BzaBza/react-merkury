import React from 'react';
import DropDownButton from "../../dumb/dropdown-button/index";
import MainButton from "../../dumb/main-button/index";
import UserMenu from "../../dumb/user-menu/index";

class MainHeader extends React.Component {

    render() {
        return (
            <header className="col-md-9">
                <div className="d-flex justify-content-between  col-md-11 align-content-center flex-wrap">
                    <div className="d-flex">
                        <button type="button"/>
                        <DropDownButton/>
                    </div>
                    <div className="d-flex flex-wrap">
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