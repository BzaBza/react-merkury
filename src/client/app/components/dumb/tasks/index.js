import React, {component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';


class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskData: {
                taskDaysDelays: '2',
                taskDaysLeft: '5'
            }
        };
    }

    render() {
        let menus = [
            {taskName: 'New website for Symu.co', days: '5 days delays'},
            {taskName: 'Free business PSD Template ', days: '2 days delays'},
            {taskName: 'New logo for JCD.pl', days: '5 days left'},
            {taskName: 'New logo for JCD.pl', days: '10 days left'},
        ];
        return (
            <section className="home-component bottom-list">
                <div className="tasks-title d-flex justify-content-between">
                    <p>Tasks</p>
                    <p>
                        <span
                            className="tasks-side-image align-items-center">{this.state.taskData.taskDaysDelays}</span><span
                        className="tasks-side-image align-items-center">{this.state.taskData.taskDaysLeft}</span>
                    </p>

                </div>
                <ul className="tasks-list">
                    {menus.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center"><p>{value.taskName.charAt(0)}</p>
                                </div>
                                <div className="text-left">
                                    <p>{value.taskName}</p>
                                    <p className="col-md-12">{value.days}</p>
                                </div>
                            </div>
                            <button type="button" className="tasks-button"><FaEllipsisV className="tasks-button-icon"/>
                            </button>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default Tasks;