import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/info";

const App = () => {
  const gridSize = 10; // 10x10 grid
  const [cellSize, setCellSize] = useState(0); // Dynamic size of each cell
  const [mode, setMode] = useState("offense"); // "offense" or "defense"
  const [selectedCells, setSelectedCells] = useState(new Set()); // Track selected cells

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

  // Handle cell click
  const handleCellClick = (index) => {
    setSelectedCells((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // Deselect if already selected
      } else {
        newSet.add(index); // Select the cell
      }
      return newSet;
    });
  };

  // Calculate win percentage and multiplier (logic only, no display)
  const selectedShips = Array.from(selectedCells).map((index) => {
    // Example: Map selected cells to ship sizes (this can be customized)
    return Info.shipSizeOptions[0]; // Default to "Patrol Boat" for simplicity
  });
  const winPercentage = Info.calculateWinPercentage(selectedShips);
  const multiplier = Info.calculateMultiplier(winPercentage);

  // These values are calculated but not displayed
  console.log("Win Percentage:", winPercentage);
  console.log("Multiplier:", multiplier);

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
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleCellClick(index)}
          >
            <img
              src={
                selectedCells.has(index)
                  ? mode === "offense"
                    ? "assets/c.png"
                    : "assets/d.png"
                  : mode === "offense"
                    ? "assets/a.png"
                    : "assets/b.png"
              }
              alt={
                selectedCells.has(index)
                  ? mode === "offense"
                    ? "Selected Offense Tile"
                    : "Selected Defense Tile"
                  : mode === "offense"
                    ? "Offense Tile"
                    : "Defense Tile"
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Control Panel */}
      <div className="controls-panel">
        {/* Top Subpanel */}
        <div className="subpanel top-subpanel">
          <div className="left-section">
            <button onClick={() => setMode("offense")}>Offense</button>
            <button onClick={() => setMode("defense")}>Defense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;