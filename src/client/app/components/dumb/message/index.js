import React, {component} from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
            messageData: {
                messageDaysLeft: 2
            }
        };
    }
    getUserData(){
        this.setState((state, props)=>(
            {
                userData: [
                    {userName: 'Nina Jones', time: 5, condition:'days delays', message: 'Hey You! It’s me again :-) I attached new (...)'},
                    {userName: 'Nina Jones', time: 2, condition:'days delays', message: 'Hey! I attached some new PSD files for (...)'},
                    {userName: 'James Smith', time: 5, condition:'days left', message: 'Good morning, you are fired!'},
                    {userName: 'Nina Jones', time: 10, condition:'days left', message: 'Hello! Could You bring me coffee please?'},
                ]
            }
        ));
    }


    componentWillMount(){
        this.getUserData();
    }


    render() {

        return (
            <section className="home-component bottom-list">
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p className="list-name">Message</p>
                    <div className="days-left align-items-center">
                        <p>
                            {this.state.messageData.messageDaysLeft}
                        </p>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {this.state.userData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center side-image"><p>{value.userName.charAt(0)}</p>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <p>{value.userName}</p>
                                        <p className="gray">{value.time + value.condition}</p>
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