import React, {component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: 128,
        };
    }

    render() {
        let menus = [
            {
                taskName: 'Jon Doe',
                position: 'CEO',
                lastActivity: 'Online now!',
                email: 'asdasd@asd.com',
                phone: '88063966667'
            },
            {
                taskName: 'Anton Antonich',
                position: 'UX Designer',
                lastActivity: 'Online now!',
                email: 'asdasd@asd.com',
                phone: '88063966667'
            },
            {
                taskName: 'Ani Jines',
                position: 'Web Designer',
                lastActivity: '20 minutes ago',
                email: 'asdasd@asd.com',
                phone: '88063966667'
            },
            {
                taskName: 'Pepe Rakolle',
                position: 'Account Manager',
                lastActivity: '99999 days ago',
                email: 'asdasd@asd.com',
                phone: '88063966667'
            },
        ];
        return (
            <section>
                <div className="tasks-title">
                    <p>Users <span>({this.state.users})</span></p>
                </div>
                <ul className="tasks-list">
                    <li className="justify-content-between d-flex">
                        <div className="col-2">Name</div>
                        <div className="col-2">Last activity</div>
                        <div className="col-2">Mail</div>
                        <div className="col-2">Phone</div>
                    </li>
                    {menus.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex col-3 users-table">
                                <div className="tasks-side-image align-items-center"><p>{value.taskName.charAt(0)}</p>
                                </div>
                                <div>
                                    <p>{value.taskName}</p>
                                    <p>{value.position}</p>
                                </div>
                            </div>
                            <div className="col-3 users-table">
                                <div>
                                    {value.lastActivity}
                                </div>
                            </div>
                            <div className="col-3 users-table">
                                <div>
                                    {value.email}
                                </div>
                            </div>
                            <div className="col-2 users-table">
                                <div>
                                    {value.phone}
                                </div>
                            </div>
                            <div className="users-table col-1">
                                <button type="button" className="tasks-button"><FaEllipsisV className="tasks-button-icon"/>
                                </button>
                            </div>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default User;