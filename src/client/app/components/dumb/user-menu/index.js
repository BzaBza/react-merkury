import { Link } from 'react-router-dom';
import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import UserImage from '../../../icons/user-image.png';

export default class UserMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="border-none">
                <DropdownToggle caret className="bg-white border-0" color="faded" >
                    <img src={UserImage} className="user-image"/>
                </DropdownToggle>
                <DropdownMenu>
                    <ul>
                        <li><Link to='/'>logout</Link></li>
                    </ul>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}
