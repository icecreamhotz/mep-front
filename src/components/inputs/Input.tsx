import React, { useState, ChangeEvent } from "react";
import { Input } from "antd";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const CustomInput: React.FC<IProps> = ({
  type = "text",
  value = "",
  placeholder = "",
  onChange,
  onKeyDown
}) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { target : { value}  } = e
  //   setInputValue(value)
  //   if(onChange) onChange(e)
  // }

  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
