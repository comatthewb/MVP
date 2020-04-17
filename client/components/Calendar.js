import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import css from "./main.css";

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
        <div className="container" style={{ marginTop: "100px" }}>
          <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MyCalendar;
