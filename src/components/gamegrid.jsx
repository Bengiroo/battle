import React from "react";
import "./gamegrid.css";

const GameGrid = ({ mode, gridSize }) => {
    // Example gridSize: { rows: 10, cols: 10 }
    const gridCells = Array.from({ length: gridSize.rows * gridSize.cols });

    return (
        <div
            className="game-grid"
            style={{
                gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
            }}
        >
            {gridCells.map((_, index) => (
                <div className="grid-item" key={index}>
                    <img
                        src={mode === "offense" ? "a.png" : "b.png"}
                        alt={mode === "offense" ? "Offense Tile" : "Defense Tile"}
                        className="grid-tile"
                    />
                </div>
            ))}
        </div>
    );
};

export default GameGrid;