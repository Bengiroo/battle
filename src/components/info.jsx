const Info = {
    // Grid size
    gridSize: 10,

    // House edge
    houseEdge: 3, // 3%

    // Ship size options
    shipSizeOptions: [
        { name: "Patrol Boat", min: 3, max: 3, width: 1 },
        { name: "Destroyer", min: 3, max: 3, width: 2 },
        { name: "Submarine", min: 5, max: 5, width: 2 },
        { name: "Battleship", min: 8, max: 8, width: 2 },
        { name: "Aircraft Carrier", min: 10, max: 10, width: 2 },
    ],

    // Missile size options
    missileSizeOptions: [
        { label: "2x1", size: 1, width: 2, height: 1 },
        { label: "4x1", size: 2, width: 4, height: 1 },
        { label: "4x2", size: 3, width: 4, height: 2 },
        { label: "7x2", size: 4, width: 7, height: 2 },
        { label: "8x3", size: 5, width: 8, height: 3 },
    ],

    // Function to calculate win percentage
    calculateWinPercentage: (selectedShips) => {
        const totalCells = Info.gridSize * Info.gridSize; // Total cells in the grid
        const totalCoverage = selectedShips.reduce((sum, ship) => sum + ship.min, 0); // Sum of all selected ship sizes
        const winPercentage = (totalCoverage / totalCells) * 100; // Calculate percentage
        return Math.max(0, winPercentage - Info.houseEdge); // Subtract house edge and ensure non-negative
    },

    // Function to calculate multiplier
    calculateMultiplier: (winPercentage) => {
        if (winPercentage <= 0) return 0; // No win chance, no multiplier
        const adjustedWinPercentage = Math.max(winPercentage, 0.01); // Prevent division by zero
        const multiplier = (100 - Info.houseEdge) / adjustedWinPercentage;
        return parseFloat(multiplier.toFixed(2)); // Round to 2 decimal places
    },
};

export default Info;