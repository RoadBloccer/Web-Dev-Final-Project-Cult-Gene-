"use strict";

function generateLair(rows, cols) {
    const table = document.getElementById("dungeon");
    table.innerHTML = "";

    // Safety: need enough space for a bordered maze with odd dimensions for nice paths
    if (rows < 5 || cols < 5) {
        console.warn("Use rows/cols >= 5");
        return;
    }

    // Initialize grid with walls
    const grid = Array.from({ length: rows }, () => Array(cols).fill("wall"));

    const directions = [
        [0, -1],  // N
        [0, 1],  // S
        [1, 0],  // E
        [-1, 0]   // W
    ];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Recursive backtracking carve within inner bounds [1 .. rows-2] and [1 .. cols-2]
    function carve(x, y) {
        grid[y][x] = "corridor";
        const dirs = shuffle(directions.slice());

        for (const [dx, dy] of dirs) {
            const nx = x + dx * 2;     // target cell two steps away
            const ny = y + dy * 2;
            const mx = x + dx;         // middle cell between current and target
            const my = y + dy;

            // Keep carving strictly inside inner area to preserve 1-cell border
            const inInner =
                nx >= 1 && nx <= cols - 2 &&
                ny >= 1 && ny <= rows - 2;

            if (inInner && grid[ny][nx] === "wall") {
                grid[my][mx] = "corridor"; // open the wall between
                grid[ny][nx] = "corridor"; // carve the target
                carve(nx, ny);
            }
        }
    }

    // Start just inside the border
    const startX = 1;
    const startY = 1;
    carve(startX, startY);
    grid[startY][startX] = "start";

    // Ensure the outer border remains walls (1-cell border)
    for (let r = 0; r < rows; r++) {
        grid[r][0] = "wall";
        grid[r][cols - 1] = "wall";
    }
    for (let c = 0; c < cols; c++) {
        grid[0][c] = "wall";
        grid[rows - 1][c] = "wall";
    }

    // Place end in the opposite corner (bottom-right inside the border)
    const endY = rows - 2;
    const endX = cols - 2;
    grid[endY][endX] = "treasure";

    // Ensure there's a corridor leading to end (if not already)
    if (grid[endY - 1][endX] === "wall") {
        grid[endY - 1][endX] = "corridor";
    }
    if (grid[endY][endX - 1] === "wall") {
        grid[endY][endX - 1] = "corridor";
    }

    // Render grid
    for (let r = 0; r < rows; r++) {
        const row = document.createElement("tr");
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement("td");
            cell.className = grid[r][c];
            if (grid[r][c] === "start") cell.textContent = "S";
            else if (grid[r][c] === "treasure") cell.textContent = "E";
            else if (grid[r][c] === "corridor") cell.textContent = ".";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
