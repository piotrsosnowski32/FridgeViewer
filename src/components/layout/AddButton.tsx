import React from "react";

const AddButton = () => {
    const fabStyle:{} = {
        position: "fixed",
        bottom: "60px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#272727",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        cursor: "pointer",
        border: "none",
  };

  return (
    <button style={fabStyle}>
      +
    </button>
  );

};

export default AddButton;