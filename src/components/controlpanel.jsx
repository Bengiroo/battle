import React from "react";
import "./controlpanel.css";

const ControlPanel = ({ mode, setMode }) => {
  return (
    <div className="controls-panel">
      <div className="subpanel top-subpanel">
        <div className="left-section">
          <button
            className={`control-button ${mode === "offense" ? "active" : ""}`}
            onClick={() => setMode("offense")}
          >
            Offense
          </button>
          <button
            className={`control-button ${mode === "defense" ? "active" : ""}`}
            onClick={() => setMode("defense")}
          >
            Defense
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;