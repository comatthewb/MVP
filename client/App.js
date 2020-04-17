import React from "react";
import ReactDOM from "react-dom";
import Roster from "./components/Roster/Roster";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import MyCalendar from "./components/Calendar";
import Countdown from "./components/Countdown";
import Guides from "./components/Guides";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRender: true,
      calendarRender: false,
      navbarRender: true,
      profileRender: false,
      guideRender: false,
    };
  }

  calendarClickHandler() {
    this.setState({
      calendarRender: true,
      homeRender: false,
      profileRender: false,
      guideRender: false,
    });
  }

  homeClickHandler() {
    this.setState({
      calendarRender: false,
      homeRender: true,
      profileRender: false,
      guideRender: false,
    });
  }

  guidesClickHandler() {
    this.setState({
      calendarRender: false,
      homeRender: false,
      profileRender: false,
      guideRender: true,
    });
  }

  render() {
    return (
      <div className="test">
        <div>
          <Navbar
            homeClickHandler={this.homeClickHandler.bind(this)}
            calendarClickHandler={this.calendarClickHandler.bind(this)}
            guidesClickHandler={this.guidesClickHandler.bind(this)}
          />
        </div>
        <div className="container-fluid">
          <Roster
            show={this.state.homeRender}
            homeRender={this.state.homeRender}
          />
        </div>
        <div>
          <MyCalendar calendarRender={this.state.calendarRender} />
        </div>
        <div>
          <Guides guideRender={this.state.guideRender} />
        </div>
      </div>
    );
  }
}
