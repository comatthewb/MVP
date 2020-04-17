import React from "react";
import moment from "moment";
import momentPrecise from "moment-precise-range-plugin";
var m1 = moment();
var m2 = moment("2020-04-19 16:00:00", "YYYY-MM-DD HH:mm:ss");

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
    this.displayCountdown = this.displayCountdown.bind(this);
  }

  displayCountdown() {
    var diff = moment
      .preciseDiff(
        moment(),
        moment("2020-04-19 16:00:00", "YYYY-MM-DD HH:mm:ss")
      )
      .toUpperCase();

    this.setState({
      time: diff,
    });
    setInterval(() => {
      var diff = moment
        .preciseDiff(
          moment(),
          moment("2020-04-19 16:00:00", "YYYY-MM-DD HH:mm:ss")
        )
        .toUpperCase();

      this.setState({
        time: diff,
      });
    }, 1000);
  }

  componentDidMount() {
    this.displayCountdown();
  }

  render(props) {
    if (this.props.homeRender) {
      return <h3 className="countdown">NEXT RAID IN {this.state.time}</h3>;
    } else {
      return null;
    }
  }
}

export default Countdown;
