import React from "react";
import moment from "moment";
import momentPrecise from "moment-precise-range-plugin";
var m1 = moment();
var m2 = moment("2020-04-19 16:00:00", "YYYY-MM-DD HH:mm:ss");
var diff = moment.preciseDiff(m1, m2);

const Countdown = (props) => {
  if (props.homeRender) {
    return <h3 className="countdown"> NEXT RAID IN {diff.toUpperCase()};</h3>;
  } else {
    return null;
  }
};

export default Countdown;
