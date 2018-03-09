import React, {component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import MdAccessTime from 'react-icons/lib/md/access-time';
import userData from '../../../data/users-data'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
        };
    }
    getUserData(){
        this.setState((state, props)=>(
            {
                userData: userData
            }
        ));
    }


    componentWillMount(){
        this.getUserData();
    }

    render() {
        return (
            <section>
                <div className="users-title">
                    <p>Users <span className="gray">({this.state.userData.length})</span></p>
                </div>
                <ul className="tasks-list">
                    <li className="justify-content-between d-flex gray">
                        <div className="col-md-3">Name</div>
                        <div className="col-md-3">Last activity</div>
                        <div className="col-md-3">Mail</div>
                        <div className="col-md-3">Phone</div>
                    </li>
                    {this.state.userData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center  flex-wrap col-12">
                            <div className="d-flex col-md-3 users-table">
                                <div className="align-items-center">
                                    <img src={value.userPhoto} />
                                    <div className={value.lastActivity === 'Online now!' ?'online' : ''}/>
                                </div>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="col-12 user-name">{value.userName}</div>
                                    <div className="gray col-12">{value.position}</div>
                                </div>
                            </div>
                            <div className="col-md-3 users-table">
                                <div className={`${'align-items-center d-flex '}${value.lastActivity === 'Online now!' ? 'green': 'gray'}`}>
                                    <MdAccessTime/> {value.lastActivity}
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
                            <div className="users-table col-md-1 justify-content-center">
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