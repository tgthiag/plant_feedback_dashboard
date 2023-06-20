import React from 'react';

function ChartsBackground({ children }) {
  return (
    <div
      style={{

        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
        border: "2px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        margin:10,
        // background: "linear-gradient(45deg, #ffffff, #e0e0e0)",
        backgroundColor:"white",
        transform: "translateY(-2px)",
        overflow: "hidden", // Add this line to enable scrolling if needed
      }}
    >
      {children}
    </div>
  );
}

export default ChartsBackground;
