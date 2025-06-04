import React, { useState } from "react";
import "./gamegrid.css";

const GameGrid = ({ mode, gridSize }) => {
  const [selectedCells, setSelectedCells] = useState(new Set()); // Track selected cells

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

  return (
    <div
      className="game-grid"
      style={{
        gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
      }}
    >
      {Array.from({ length: gridSize.rows * gridSize.cols }).map((_, index) => (
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
            className="grid-tile"
          />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;