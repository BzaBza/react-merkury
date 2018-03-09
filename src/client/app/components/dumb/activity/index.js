import React, {component} from 'react';
import MdAccessTime from 'react-icons/lib/md/access-time';
import activityData from "../../../data/activity-data";

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityData:[],
            activityDaysLeft: '5',
            activityDaysDelays: ''

        };
    }
    getUserData(){
        this.setState((state, props)=>(
            {
                activityData: activityData
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
                                {this.state.activityDaysLeft}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {this.state.activityData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center activity-list home-footer-line">
                            <div className="d-flex align-items-center">
                                <div className="align-items-center side-image">
                                    <img src={value.userPhoto} className="user-photo"/>
                                </div>
                                <div>
                                    <div className="text-left  d-flex">
                                        <p className="user-name">{value.userName}</p>
                                        <p className="gray user-name">{value.action}</p>
                                        <p>{value.taskName}</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="d-flex align-items-center gray"><MdAccessTime/> {value.days}</p>
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