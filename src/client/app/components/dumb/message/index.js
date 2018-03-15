import React, { component } from 'react';
import messageData from '../../../reducer/messageData';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageDaysLeft: 2,

        };
    }

    render() {
        return (
            <section className="home-component bottom-list">
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p className="list-name">Message</p>
                    <div className="days-left align-items-center">
                        <p>
                            {this.state.messageDaysLeft}
                        </p>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {messageData.map((value, index) => <li key={index}
                        className="d-flex justify-content-between align-items-center home-footer-line">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className=" align-items-center side-image">
                                <img src={value.userPhoto} className="user-photo"/>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div className="user-name"><p>{value.userName}</p></div>
                                    <div><p className="gray">{value.time + value.condition}</p></div>
                                </div>
                                <p>{value.message}</p>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </section>
        );
    }
}

export default Message;
