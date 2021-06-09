import React from "react";
import { StyledInput } from "./Input.styled";

const Input = ({ label, id, value, setValue, ...props }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="inputSearch"
      />
      <div></div>
    </StyledInput>
  );
};

export default Input;
