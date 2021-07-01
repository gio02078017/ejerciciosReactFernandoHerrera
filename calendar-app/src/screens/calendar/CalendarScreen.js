import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar'

import { Navbar } from '../../components/ui/Navbar';
import { AddNewFab } from '../../components/ui/AddNewFab';
import { DeleteEventFab } from '../../components/ui/DeleteEventFab';

import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from '../../components/calendar/CalendarEvent';
import { CalendarModal } from '../../components/calendar/CalendarModal';

import { uiOpenModal } from '../../redux/actions/ui';
import { eventSetActive, eventStartLoading } from '../../redux/actions/events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';


moment.locale('es');
const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { uid } = useSelector( state => state.auth );

    
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ])


    const onDoubleClick = (e) => {
        // console.log(e);
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e)
        //dispatch(eventClearActiveEvent());
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#367CF7': '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }


        return {
            style
        }
    };

    console.log("CalendarScreen events ",events);

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />

            <AddNewFab/>

            {
                (activeEvent) && <DeleteEventFab />
            }
        </div>
    )
}