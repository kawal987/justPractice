import React from "react";
import "./Style.css";
const Tooltip = () => {
  return (
    <div>
      <div className="badge_pulsate_outer">
        <div className="badge_pulsate">
          Rx
          <div className="rx_tooltip">Need Presciption from the Doctors</div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
