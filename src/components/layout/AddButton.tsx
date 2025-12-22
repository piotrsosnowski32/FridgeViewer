import React from "react";
import { useEffect, useState } from "react";
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Button } from '@base-ui/react/button';


const AddButton = ({ onActivate }) => {
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
    const [errors, setErrors] = React.useState({});
 
    const handleClick = () => {
      if (!showField) {
        setShowField(true);       
      } else {
        setShowField(false);
      };
      onActivate();
    };

    const today = new Date().toISOString().slice(0, 10)

  return (
    <>
      <button style={fabStyle} onClick={handleClick}>
        +
      </button>
      {showField && (
      <Form 
        style={{ position:"fixed", right:"50%", bottom:"50%", display:"flex", flexDirection:"column" }}
        className="flex w-full max-w-64 flex-col gap-4"
        errors={errors}
        onFormSubmit={async (formValues) => {
          const response = await submitForm(formValues); // to do
          setErrors(response.errors);
        }}
      
      >

      <Field.Root name="name" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-gray-900">Name</Field.Label>
        <Field.Control
          placeholder="Enter name"
          className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
        />
        <Field.Error className="text-sm text-red-800" />
      </Field.Root>

      <Field.Root name="age" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-gray-900">Age</Field.Label>
        <Field.Control
          placeholder="Enter age"
          className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
        />
        <Field.Error className="text-sm text-red-800" />
      </Field.Root>

      <Button
        type="submit"
        className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500"
      >
        Submit
      </Button>
    </Form>
      )}
        
    </>

  );

};

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {

  } catch {
    
  }

  return { success: true };
};

export default AddButton;

// <Field.Error className="text-sm text-red-800" />