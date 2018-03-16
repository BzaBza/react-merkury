import React from 'react';
import { connect } from 'react-redux';
import Tasks from '../../dumb/tasks/index';
import Message from '../../dumb/message/index';
import Activity from '../../dumb/activity/index';
import { getUsersData } from '../../../actions/users'

class HomePageBottom extends React.Component {

componentWillMount(){
    this.props.onGetUserData()
}

    render() {
        return (
            <section className="d-flex flex-wrap justify-content-around home-page-bottom">
                <Tasks taskData = {this.props.taskData}/>
                <Message/>
                <Activity/>
            </section>
        );
    }
}
export default connect(
    state => ({
        taskData: state.tasksData
    }),
    dispatch => ({
        onGetUserData: () => {
            dispatch(getUsersData());
        }
    })
)(HomePageBottom);
