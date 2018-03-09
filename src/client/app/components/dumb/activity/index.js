import React, {component} from 'react';
import MdAccessTime from 'react-icons/lib/md/access-time';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
            activityData: {
                activityDaysLeft: '5',
                activityDaysDelays: ''
            }
        };
    }
    getUserData(){
        this.setState((state, props)=>(
            {
                userData: [
                    {userName: 'Nina Jones', days: '5 days delays', action:'added a new project', taskName:'Free UI Kit'},
                    {userName: 'James Smith', days: '2 days delays', action:'commented project', taskName:'Free PSD Template'},
                    {userName: 'Alex Clooney', days: '5 days left', action:'completed task', taskName:'Website'},
                    {userName: 'Alexandra Spears', days: '10 days left', action:'added a new project', taskName:'Free PSD Template'},
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
                    <p className="list-name">Activity</p>
                    <div className="d-flex">
                        <div className="days-left align-items-center">
                            <p>
                                {this.state.activityData.activityDaysLeft}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {this.state.userData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center activity-list">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center side-image">
                                    <p>{value.userName.charAt(0)}</p>
                                </div>
                                <div>
                                    <div className="text-left  d-flex">
                                        <p>{value.userName}</p>
                                        <p>{value.action}</p>
                                        <p>{value.taskName}</p>
                                    </div>
                                    <div className="col-12 text-left">
                                        <p className=' d-flex align-items-center gray'><MdAccessTime/> {value.days}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default Activity;