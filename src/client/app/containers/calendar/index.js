import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import localizer from 'react-big-calendar/lib/localizers/moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Container} from 'reactstrap';
import Nicky from '../../icons/nicky.png';

localizer(moment);

const CustomEvent = ({event}) => {

    const getTime = (h, m) => {
        let time = h.toString();
        m = m.toString();
        if (m.length === 1) m = '0' + m;
        time += ':' + m;
        if (h > 12) time += ' pm'; else time += ' am';
        return time;
    };

    return <div>
        <span className='rbc-event-content'>{event.title}</span>
        <div className={`rbc-event-expand
         ${event.isDataOpen ? 'open' : 'hidden'} ${event.end.getDay() > 3 ?
            'left' : 'right'}`}>
            <div className='rbc-event-part'>
                <div className='part-wrapper'>
                    <span className='icon'>
                    <img src={Nicky}/>
                </span>
                    <div className='rbc-event-author'>
                    <span className='author-name'>
                        {event.author.name}
                    </span>
                        <span className='author-position'>
                        {event.author.position}
                    </span>
                    </div>
                </div>
            </div>
            <div className='rbc-event-part'>
                <ul className='rbc-event-data'>
                    <li className='data-item'>
                        <span>title:</span>
                        <span>{event.title}</span>
                    </li>
                    <li className='data-item'>
                        <span>starts:</span>
                        <span>
                            {getTime(event.start.getHours(), event.start.getMinutes())}
                        </span>
                    </li>
                    <li className='data-item'>
                        <span>ends:</span>
                        <span>
                            {getTime(event.end.getHours(), event.end.getMinutes())}
                        </span>
                    </li>
                    <li className='data-item'>
                        <span>place:</span>
                        <span>{event.location}</span>
                    </li>
                </ul>
            </div>
            <div className='rbc-event-part'>
                <Link to={'/calendar/' + event.id.toString()}
                      className='rbc-event-edit'>Edit event</Link>
            </div>
        </div>
    </div>;
};


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

let defaultEvents = [
    {
        id: 0,
        title: 'Meeting with Dan Smith',
        allDay: true,
        start: new Date(2018, 11, 29),
        end: new Date(2018, 11, 30),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },
    {
        id: 1,
        title: 'Show guys how to mak...',
        start: new Date(2018, 0, 2),
        end: new Date(2018, 0, 2),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },

    {
        id: 2,
        title: 'Team meeting',
        start: new Date(2018, 0, 2),
        end: new Date(2018, 0, 2),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },

    {
        id: 3,
        title: 'New website presenta...',
        start: new Date(2018, 0, 8),
        end: new Date(2018, 0, 8),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },

    {
        id: 4,
        title: 'Meeting with Google CEO',
        start: new Date(2018, 0, 16),
        end: new Date(2018, 0, 16),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },
    {
        id: 5,
        title: 'Annual Report',
        start: new Date(2018, 0, 19),
        end: new Date(2018, 0, 19),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },
    {
        id: 6,
        title: 'Call to John',
        start: new Date(2018, 0, 21),
        end: new Date(2018, 0, 21),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    },
    {
        id: 7,
        title: 'Team meeting',
        start: new Date(2018, 0, 21),
        end: new Date(2018, 0, 21),
        isDataOpen: false,
        author: {
            name: 'Nicky Hunt',
            position: 'Product Designer'
        },
        location: 'Symu.co HQ'
    }
];

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: defaultEvents
        };

        this.onEventAdd = this.onEventAdd.bind(this);
        this.onDataOpen = this.onDataOpen.bind(this);
    }

    onEventAdd(slotInfo) {
        if (slotInfo.action === 'select') {

            const title =
                prompt('Enter the event title (press cancel to undo adding)',
                    'Event' + this.state.events.length.toString());

            if (title) {
                const newEvents = this.state.events.concat([{
                    id: this.state.events.length,
                    title: title,
                    start: slotInfo.start,
                    end: slotInfo.end
                }]);
                this.setState({
                    events: newEvents
                })
            }
        }
    }

    onDataOpen(e) {
        const [selectedEvent] =
            this.state.events.filter(checkingEvent =>
            checkingEvent.id === e.id);
        selectedEvent.isDataOpen = !selectedEvent.isDataOpen;

        const newEvents =
            this.state.events;
        newEvents[selectedEvent.id] = selectedEvent;

        this.setState({
            events: newEvents
        });
    }

    render() {
        return (
            <section className='calendar containers'>
                <Container>
                    <BigCalendar
                        events={this.state.events}
                        views={allViews}
                        step={60}
                        showMultiDayTimes
                        popup
                        selectable
                        onSelectSlot={this.onEventAdd}
                        onSelectEvent={this.onDataOpen}
                        components={{
                            event: CustomEvent
                        }}
                        defaultDate={new Date(2018, 0, 1)}
                    />
                </Container>
            </section>
        );
    }
}

export default Calendar;