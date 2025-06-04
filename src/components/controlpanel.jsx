import React, { useState } from "react";
import "./controlpanel.css";

const ControlPanel = ({ mode, setMode, rotateMissile, rotateShip, fire }) => {
  const [isVertical, setIsVertical] = useState(false); // Track orientation state

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "offense" ? "defense" : "offense"));
  };

  const handleRotate = () => {
    if (mode === "offense") {
      rotateMissile();
    } else {
      rotateShip();
    }
    setIsVertical((prev) => !prev); // Toggle orientation
  };

  return (
    <div className="controls-panel">
      {/* Top Section */}
      <div className="top-section">
        {/* Toggles */}
        <div className="toggles">
          <div className="toggle-container">
            <input
              id="switch-component"
              type="checkbox"
              className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
              checked={mode === "defense"}
              onChange={toggleMode}
            />
            <label
              htmlFor="switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
            ></label>
          </div>

          <div className="toggle-container">
            <input
              id="secondary-switch-component"
              type="checkbox"
              className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="secondary-switch-component"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
            ></label>
          </div>
        </div>

        {/* Rotation Button and Balance Display */}
        <div className="rotate-container">
          <div className="balance-display"> $10,000</div>
          <button
            className={`rotate-button ${isVertical ? "vertical" : "horizontal"}`}
            onClick={handleRotate}
          >
            Rotate
          </button>
        </div>

        {/* Fire Button */}
        <div className="fire-button" onClick={fire}>
          <img src="/assets/z.png" alt="Fire" className="fire-image" />
        </div>
      </div>

      {/* Info Blocks and Sliders */}
      <div className="info-sliders">
        <div className="info-blocks">
          <div className="info-block">
            <p>Ship 1: Patrol Boat</p>
            <p>Win: 0%</p>
          </div>
          <div className="info-block">
            <p>Ship 2: Patrol Boat</p>
            <p>Multi: 0x</p>
          </div>
        </div>
        <div className="sliders">
          <input type="range" className="slider" />
          <input type="range" className="slider" />
        </div>
      </div>

      {/* Bet Input Bar */}
      <div className="bet-input-bar">
        <input type="number" className="bet-input" placeholder="100" />
        <div className="bet-buttons">
          <button className="bet-button">2x</button>
          <button className="bet-button">1/2</button>
          <button className="bet-button">Max</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab manual-tab active">Manual</button>
        <button className="tab auto-tab">Auto</button>
      </div>
    </div>
  );
};

export default ControlPanel;