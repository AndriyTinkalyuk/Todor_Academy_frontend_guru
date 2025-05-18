import React, { useState } from "react";

interface UseInputProps { 
    InitialValue: number | string;
}

const UseInput = ({InitialValue} : UseInputProps) => {
    const [value, setValue] = useState(InitialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> setValue(e.target.value)

  return {value, onChange}
};

export default UseInput;
