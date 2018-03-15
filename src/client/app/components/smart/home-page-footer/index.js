import React from 'react';
import Tasks from '../../dumb/tasks/index';
import Message from '../../dumb/message/index';
import Activity from '../../dumb/activity/index';

const initialState = [
    {
        userName: 'Ueser Name',
        days: 'days',
        action: 'action',
        taskName: ' Task Name',
        userPhoto: 'url'
    },
];

class HomePageBottom extends React.Component {

    render() {
        return (
            <section className="d-flex flex-wrap justify-content-around home-page-bottom">
                <Tasks />
                <Message/>
                <Activity/>
            </section>
        );
    }
}
export default HomePageBottom;
