import React from "react";

const RosterItem = (props) => {
  return props.rosterItem.map((item, index) => (
    <div key={index}>
      <li
        id={`bannerimage0`}
        className="list-group-item roster-name-size"
        style={{
          backgroundImage: `url(${props.emblems[index].urls})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <span
          className="glyphicon glyphicon-remove remove-from-roster"
          onClick={() => {
            props.deleteItem(index);
          }}
        ></span>
        <div id={"bannertext"}>{item}</div>
      </li>
    </div>
  ));
};

export default RosterItem;
