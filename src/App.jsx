import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const gridSize = 10; // 10x10 grid
  const [cellSize, setCellSize] = useState(0); // Dynamic size of each cell

  // Dynamically calculate cell size based on viewport dimensions
  useEffect(() => {
    const calculateCellSize = () => {
      const smallerDimension = Math.min(window.innerWidth, window.innerHeight);
      const size = smallerDimension / gridSize; // Divide by 10 for a 10x10 grid
      setCellSize(size);
    };

    calculateCellSize(); // Calculate on page load
    window.addEventListener("resize", calculateCellSize); // Recalculate on resize
    return () => window.removeEventListener("resize", calculateCellSize);
  }, []);

  return (
    <div className="app-container">
      {/* Game Grid */}
      <div
        className="game-grid"
        style={{
          gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const row = Math.floor(index / gridSize) + 1; // Calculate row (1-indexed)
          const col = (index % gridSize) + 1; // Calculate column (1-indexed)
          return (
            <div
              key={index}
              className="grid-item"
            >
              <span className="cell-label">
                {row},{col}
              </span>
            </div>
          );
        })}
      </div>

      {/* Control Panel */}
      <div className="controls-panel">
        {/* Top Subpanel */}
        <div className="subpanel top-subpanel">
          <div className="left-section">
            <div className="toggle">Toggle 1</div>
            <div className="toggle">Toggle 2</div>
            <div className="balance">Balance</div>
          </div>
          <div className="middle-section">
            <button className="rotation-button">Rotate</button>
          </div>
          <div className="right-section">
            <button className="main-action-button">Action</button>
          </div>
        </div>

        {/* Middle Subpanel */}
        <div className="subpanel middle-subpanel">
          <div className="info-boxes">
            <div className="info-box">Info 1</div>
            <div className="info-box">Info 2</div>
          </div>
          <div className="sliders">
            <input type="range" min="0" max="100" className="slider" />
            <input type="range" min="0" max="100" className="slider" />
          </div>
        </div>

        {/* Bottom Subpanel */}
        <div className="subpanel bottom-subpanel">
          <input type="text" placeholder="Balance Input" className="balance-input" />
          <div className="tabs">
            <button className="tab active">Manual</button>
            <button className="tab">Auto</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;