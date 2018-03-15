import React, { component } from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import MdAccessTime from 'react-icons/lib/md/access-time';
import taskData from '../../../reducer/tasksData';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskCondition: {
                taskDaysDelays: '5',
                taskDaysLeft: '2',
            },
        };
    }

    render() {
        return (
            <section className="home-component bottom-list ">
                <div className="list-title d-flex justify-content-between align-items-center">
                    <p className="list-name">Tasks</p>
                    <div className="align-items-center d-flex">
                        <div className="days-left">
                            <p>
                                {this.state.taskCondition.taskDaysDelays}
                            </p>
                        </div>
                        <div className="days-delays">
                            <p>
                                {this.state.taskCondition.taskDaysLeft}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="home-footer-list ">
                    {taskData.map((value, index) => <li key={index} className="d-flex justify-content-between align-items-center home-footer-line">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="tasks-side-image align-items-center side-image">
                                <p>{value.taskName.charAt(0)}</p>
                            </div>
                            <div className="text-left">
                                <p className="task">{value.taskName}</p>
                                <p className={`${value.className}${' d-flex align-items-center'}`}><MdAccessTime/>{value.days}</p>
                            </div>
                        </div>
                        <button type="button" className="tasks-button"><FaEllipsisV className="tasks-button-icon"/>
                        </button>
                    </li>)}
                </ul>
            </section>
        );
    }
}

export default Tasks;
