import {Link} from  'react-router-dom';
import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class UserMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className="black" >
                    <img src="" alt=""/>
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