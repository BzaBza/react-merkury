import FaSearch from 'react-icons/lib/fa/search';
import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class DropDownButton extends React.Component {
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
                <DropdownToggle >
                    <FaSearch className="black"/>
                </DropdownToggle>
                <DropdownMenu>
                    <input type="text"/>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}