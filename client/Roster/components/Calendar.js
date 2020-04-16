import React from "react";
import Calendar from "react-event-calendar";
import PropTypes from "prop-types";

class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    console.log(this.props.calendarRender);
    if (this.props.calendarRender) {
      return (
        <div className="container">
          <Calendar
            month={7}
            year={2015}
            events={events}
            onEventClick={(target, eventData, day) => console.log(eventData)}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MyCalendar;
