import React from "react";
import { useEffect, useState } from "react";
import { Field } from '@base-ui/react/field';


const AddButton = ( {onActivate} ) => {
    const fabStyle:{} = {
        position: "relative",
        right: "20px",
        height: "90%",
        borderRadius: "50%",
        backgroundColor: "#272727",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "6vh",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        cursor: "pointer",
        border: "none",
        aspectRatio: 1/1
  };

    const [showField, setShowField] = useState(false);
 
    const handleClick = () => {
      if (!showField) {
        setShowField(true);       
      } else {
        setShowField(false);
      };
      onActivate();
    };

  return (
    <>
      <button style={fabStyle} onClick={handleClick}>
        +
      </button>
      {showField && (
          <Field.Root className="flex w-full max-w-64 flex-col items-start gap-1" style={{ position:"fixed", right:"50%", bottom:"50%", display:"flex", flexDirection:"column" }}>
            <Field.Label className="text-sm font-medium text-gray-900">Name</Field.Label>
            <Field.Control
              required
              placeholder="Required"
              className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
            />
            <Field.Error className="text-sm text-red-800" match="valueMissing">
              Please enter your name
            </Field.Error>

            <Field.Label className="text-sm font-medium text-gray-900">Name</Field.Label>
            <Field.Control
              required
              placeholder="Required"
              className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
            />

            <Field.Label className="text-sm font-medium text-gray-900">Name</Field.Label>
            <Field.Control
              required
              placeholder="Required"
              className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
            />

            <Field.Label className="text-sm font-medium text-gray-900">Name</Field.Label>
            <Field.Control
              required
              placeholder="Required"
              className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
            />

          </Field.Root>
      )}
        
    </>

  );

};

export default AddButton;

// anchorEl={anchorEl} 