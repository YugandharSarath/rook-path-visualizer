// App.tsx
import React, { useState } from "react";
import "./styles.css";

const boardSize = 8;

type Position = [number, number] | null;

export default function App() {
  const [hovered, setHovered] = useState<Position>(null);

  return (
    <div className="board">
      {Array.from({ length: boardSize }).map((_, row) =>
        Array.from({ length: boardSize }).map((_, col) => {
          const isHovered = hovered && hovered[0] === row && hovered[1] === col;
          const isRookMove =
            hovered && (hovered[0] === row || hovered[1] === col) && !isHovered;

          const isLight = (row + col) % 2 === 0;

          return (
            <div
              key={`${row}-${col}`}
              className={`cell ${isLight ? "light" : "dark"} ${
                isHovered ? "hovered" : isRookMove ? "rook-move" : ""
              }`}
              data-testid={`cell-${row}-${col}`}
              role="gridcell"
              onMouseEnter={() => setHovered([row, col])}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })
      )}
    </div>
  );
}
