import React, {component} from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageData: {
                messageDaysLeft: '5'
            }
        };
    }

    render() {
        let menus = [
            {userName: 'Nina Jones', time: '5 days delays', message: 'Hey You! It’s me again :-) I attached new (...)'},
            {userName: 'Nina Jones ', time: '2 days delays', message: 'Hey! I attached some new PSD files for (...)'},
            {userName: 'James Smith', time: '5 days left', message: 'Good morning, you are fired!'},
            {userName: 'Nina Jones', time: '10 days left', message: 'Hello! Could You bring me coffee please?'},
        ];
        return (
            <section className="home-component bottom-list">
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p>Message</p>
                    <div className="days-left align-items-center">
                        <p>
                            {this.state.messageData.messageDaysLeft}
                        </p>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {menus.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center side-image"><p>{value.userName.charAt(0)}</p>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <p>{value.userName}</p>
                                        <p>{value.time}</p>
                                    </div>
                                    <p>{value.message}</p>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default Message;