import React, { Component } from "react";

import { Popover, PopoverBody } from "reactstrap";
import User from '../../../icons/nicky.png';

export default class CustomEvent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        return (
            <div>
                <a id={"Popover-" + this.props.event.id} onClick={this.toggle}>
                    {this.props.event.title}
                </a>
                <Popover
                    placement="right"
                    isOpen={this.state.popoverOpen}
                    target={"Popover-" + this.props.event.id}
                    toggle={this.toggle}
                >
                    <PopoverBody>
                        <div className="popover-item">
                            <p className="popover-description mb-2">Author: </p>
                            <div className="d-flex align-items-center">
                                <a>
                                    <img
                                        src={User}
                                        alt="user-img"
                                        style={{ width: 40, height: 40 }}
                                        className="popover-img"
                                    />
                                </a>
                                <div>
                                    <h4 className="popover-item-title">
                                        <a>Nicky Hunt</a>
                                    </h4>
                                    <p className="popover-item-secondary">
                                        Product Designer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="popover-item">
                            <ul>
                                <li className="popover-item-list">
									<span className="popover-description">
										Title:
									</span>
                                    <span>{this.props.event.title}</span>
                                </li>
                                <li className="popover-item-list">
									<span className="popover-description">
										Starts:
									</span>
                                    <span>
										{this.props.event.start.toLocaleTimeString()}
									</span>
                                </li>
                                <li className="popover-item-list">
									<span className="popover-description">
										Ends:
									</span>
                                    <span>
										{this.props.event.end.toLocaleTimeString()}
									</span>
                                </li>
                                <li className="popover-item-list">
									<span className="popover-description">
										Place:
									</span>
                                    <span>{this.props.event.place}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="popover-item">
                            <button
                                type="button"
                                className="btn btn-lg btn-primary"
                            >
                                Edit event
                            </button>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}