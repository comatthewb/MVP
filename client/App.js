import React from "react";
import ReactDOM from "react-dom";
import Roster from "./Roster/Roster";
import $ from "jquery";
import Navbar from "./Roster/components/Navbar";
import Profile from "./Roster/components/Profile";
import MyCalendar from "./Roster/components/Calendar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRender: true,
      calendarRender: false,
      navbarRender: true,
      profileRender: false,
    };
  }

  calendarClickHandler() {
    this.setState({
      calendarRender: true,
      homeRender: false,
      profileRender: false,
    });
  }

  homeClickHandler() {
    this.setState({
      calendarRender: false,
      homeRender: true,
      profileRender: false,
    });
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     $(".ytp-chrome-top ytp-show-cards-title").remove();
  //     $(
  //       ".ytp-unmute ytp-popup ytp-button ytp-unmute-animated ytp-unmute-shrink"
  //     ).remove();
  //     $(".ytp-pause-overlay ytp-scroll-min ytp-scroll-max").remove();
  //     $(".ytp-watermark yt-uix-sessionlink").remove();
  //     $(".ytp-cued-thumbnail-overlay").remove();
  //   }, 4000);
  // }

  render() {
    return (
      <div className="test">
        <div>
          <Navbar
            homeClickHandler={this.homeClickHandler.bind(this)}
            calendarClickHandler={this.calendarClickHandler.bind(this)}
          />
        </div>
        <div className="container-fluid">
          <Roster show={this.state.homeRender} />
        </div>
        <div>
          <MyCalendar calendarRender={this.state.calendarRender} />
        </div>
      </div>
    );
  }
}
