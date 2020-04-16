import React from "react";

const Navbar = (props) => {
  return (
    <div className="row">
      <div className="col-md-3 text-center"></div>
      <div className="col-md-2 text-center">
        <div className="text-center navbar-item-parent">
          <a
            className="navbar-item"
            onClick={() => {
              props.homeClickHandler();
            }}
          >
            HOME
          </a>
        </div>
      </div>
      <div className="col-md-2 text-center">
        <div className="text-center navbar-item-parent">
          <a
            className="navbar-item"
            onClick={() => {
              props.calendarClickHandler();
            }}
          >
            CALENDAR
          </a>
        </div>
      </div>
      <div className="col-md-2 text-center">
        <div className="text-center navbar-item-parent">
          <a className="navbar-item">GUIDES</a>
        </div>
      </div>
      <div className="col-md-2 text-center">
        <div className="text-center navbar-item-parent">
          <a className="navbar-item">PROFILE</a>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <img src="/destiny-icon.jpg" alt="b2" />
  //   </div>
  // );
};

export default Navbar;
