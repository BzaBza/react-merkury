import React, {component} from 'react';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityData: {
                activityDaysLeft: '5',
                activityDaysDelays: ''
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
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p>Activity</p>
                    <div className="d-flex">
                        <div className="days-left align-items-center">
                            <p>
                                {this.state.activityData.activityDaysLeft}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="home-footer-list">
                    {userData.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center side-image">
                                    <p>{value.taskName.charAt(0)}</p>
                                </div>
                                <div className="text-left">
                                    <p>{value.taskName}</p>
                                    <p>{value.days}</p>
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