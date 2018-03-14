import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../data/events.js';
import CustomEvent from '../../components/smart/custome-event';

export default class Calendar extends Component {
    render() {
        const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[2]);
        BigCalendar.momentLocalizer(moment);
        return (
            <div className="containers">
                <div className="col-12">
                    <React.Fragment>
                        <BigCalendar
                            popup
                            events={events}
                            views={{ month: true, week: true, day: true }}
                            defaultDate={new Date(2018, 1, 1)}
                            components={{ event: CustomEvent }}
                        />
                    </React.Fragment>
                </div>
            </div>
        );
    }
}
