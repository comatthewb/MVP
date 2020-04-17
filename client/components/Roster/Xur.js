import React from "react";

const Xur = (props) => {
  if (props.homeRender) {
    return (
      <div>
        <h1 className="xur-header"> X U R | I N V E N T O R Y // </h1>
        <div className="row">
          <div className="col-md-2 text-center xur-column">
            <div className="text-center xur-item-parent ">
              <img src="public/jade-rabbit.jpg" id="xur-item-image" />
              <p id="xur-item-description">Jade Rabbit</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center xur-column">
            <div className="text-center xur-item-parent ">
              <img src="public/sixth-coyote.jpg" id="xur-item-image" />
              <p id="xur-item-description">Sixth Coyote</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center xur-column">
            <div className="text-center xur-item-parent ">
              <img src="public/Hallowfire-Heart.jpg" id="xur-item-image" />
              <p id="xur-item-description">Hallowfire Heart</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center xur-column">
            <div className="text-center xur-item-parent ">
              <img src="public/geomag-stabilizers.jpg" id="xur-item-image" />
              <p id="xur-item-description">Geomag Stabilizers</p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
};

export default Xur;
