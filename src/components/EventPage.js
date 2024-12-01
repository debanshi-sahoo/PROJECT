import React, { useState } from 'react';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [facultyId, setFacultyId] = useState('');

    // Function to create a new event
    const createEvent = (e) => {
        e.preventDefault();

        const newEvent = {
            title: eventTitle,
            description: eventDescription,
            eventDate: eventDate,
            createdBy: facultyId,
        };

        // Add the event to the events list (UI Update)
        setEvents([...events, newEvent]);

        // Clear form inputs
        setEventTitle('');
        setEventDescription('');
        setEventDate('');
        setFacultyId('');
    };

    // Function to delete an event
    const deleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
    };

    return (
        <div className="event-page-container">
            <h2>Create Event</h2>
            <form onSubmit={createEvent} id="eventForm">
                <div className="form-group">
                    <label htmlFor="eventTitle">Event Title</label>
                    <input
                        type="text"
                        id="eventTitle"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDescription">Event Description</label>
                    <textarea
                        id="eventDescription"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        type="date"
                        id="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="facultyId">Faculty ID</label>
                    <input
                        type="text"
                        id="facultyId"
                        value={facultyId}
                        onChange={(e) => setFacultyId(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Event</button>
            </form>

            <div className="events-list" id="eventsList">
                <h3>Event List</h3>
                {events.length === 0 ? (
                    <p>No events created yet.</p>
                ) : (
                    events.map((event, index) => (
                        <div className="event-card" key={index}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <small>{event.eventDate}</small>
                            <div className="event-actions">
                                <button className="edit-btn">Edit</button>
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteEvent(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventPage;
