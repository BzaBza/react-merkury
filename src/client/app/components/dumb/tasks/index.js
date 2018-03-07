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
            {taskName: 'New website for Symu.co', days: '5 days delays',className:'red' },
            {taskName: 'Free business PSD Template ', days: '2 days delays',className:'red'},
            {taskName: 'New logo for JCD.pl', days: '5 days left', className:'gray'},
            {taskName: 'New logo for JCD.pl', days: '10 days left', className:'gray'},
        ];
        return (
            <section className="home-component bottom-list ">
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p className="list-name">Tasks</p>
                    <div className="align-items-center d-flex">
                        <div className="days-left">
                            <p>
                                {this.state.taskData.taskDaysDelays}
                            </p>
                        </div>
                        <div className="days-delays">
                            <p>
                                {this.state.taskData.taskDaysLeft}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="home-footer-list ">
                    {menus.map((value, index) => {
                        return <li key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="tasks-side-image align-items-center side-image"><p>{value.taskName.charAt(0)}</p>
                                </div>
                                <div className="text-left">
                                    <p className="task">{value.taskName}</p>
                                    <p className={value.className}>{value.days}</p>
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