import React, {component} from 'react';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityData: {
                activityDaysDelays: '2',
                activityDaysLeft: '5'
            }
        };
    }

    render() {
        const userData = [
            {taskName: 'New website for Symu.co', days: '5 days delays'},
            {taskName: 'Free business PSD Template ', days: '2 days delays'},
            {taskName: 'New logo for JCD.pl', days: '5 days left'},
            {taskName: 'New logo for JCD.pl', days: '10 days left'},
        ];

        return (
            <section className="home-component bottom-list">
                <div className="tasks-title d-flex justify-content-between">
                    <p>Activity</p>
                    <div>
                        <span
                            className="tasks-side-image align-items-center">{this.state.activityData.activityDaysDelays}</span><span
                        className="tasks-side-image align-items-center">{this.state.activityData.activityDaysLeft}</span>
                    </div>
                </div>
                <ul className="tasks-list">
                    {userData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center">
                                    <p>{value.taskName.charAt(0)}</p>
                                </div>
                                <div className="text-left">
                                    <p>{value.taskName}</p>
                                    <p className="col-md-12">{value.days}</p>
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