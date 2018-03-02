import React from 'react';;
import Tasks from "../../dumb/tasks/index";
import Message from "../../dumb/message/index";
import Activity from "../../dumb/activity/index";


class HomePageBottom extends React.Component {
    render() {
        return (
            <section className="d-flex flex-wrap justify-content-between home-page-bottom">
                <Tasks/>
                <Message/>
                <Activity/>
            </section>
        )
    }
}

export default HomePageBottom;