import React, {component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import userPhoto1 from '../../../icons/users/johhn-doe.png';
import userPhoto2 from '../../../icons/users/alex-smith.png';
import userPhoto3 from '../../../icons/users/nina-jones.png';
import userPhoto4 from '../../../icons/users/ann-cloony.png';

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
                userName: 'Jon Doe',
                position: 'CEO',
                lastActivity: 'Online now!',
                email: 'asdasd@asd.com',
                phone: '88063966667',
                userPhoto: userPhoto1
            },
            {
                userName: 'Alex Smith',
                position: 'UX Designer',
                lastActivity: 'Online now!',
                email: 'asdasd@asd.com',
                phone: '88063966667',
                userPhoto: userPhoto2
            },
            {
                userName: 'Nina Jones',
                position: 'Web Designer',
                lastActivity: '20 minutes ago',
                email: 'asdasd@asd.com',
                phone: '88063966667',
                userPhoto: userPhoto3
            },
            {
                userName: 'Ann Cloony',
                position: 'Account Manager',
                lastActivity: '99999 days ago',
                email: 'asdasd@asd.com',
                phone: '88063966667',
                userPhoto: userPhoto4
            },
        ];
        return (
            <section>
                <div className="tasks-title">
                    <p>Users <span>({this.state.users})</span></p>
                </div>
                <ul className="tasks-list">
                    <li className="justify-content-between d-flex">
                        <div className="col-md-3">Name</div>
                        <div className="col-md-3">Last activity</div>
                        <div className="col-md-3">Mail</div>
                        <div className="col-md-3">Phone</div>
                    </li>
                    {menus.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center  flex-wrap">
                            <div className="d-flex col-md-3 users-table">
                                <div className="align-items-center">
                                    <img src={value.userPhoto}/>
                                    <div className={value.lastActivity === 'Online now!' ?'online' : ''}/>
                                </div>
                                <div>
                                    <p>{value.userName}</p>
                                    <p>{value.position}</p>
                                </div>
                            </div>
                            <div className="col-md-3 users-table">
                                <div className={value.lastActivity === 'Online now!' ? 'green': 'gray'
                                    }>
                                    {value.lastActivity}
                                </div>
                            </div>
                            <div className="col-md-3 users-table">
                                <div>
                                    {value.email}
                                </div>
                            </div>
                            <div className="col-md-2 users-table">
                                <div>
                                    {value.phone}
                                </div>
                            </div>
                            <div className="users-table col-md-1">
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