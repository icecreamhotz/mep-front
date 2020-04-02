import React from "react";
import { Input } from "antd";
import { Field } from "formik";

interface IProps {
  // type?: string;
  // value?: string;
  // placeholder?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  name?: string;
  type?: string;
  placeholder?: string;
  prefix?: JSX.Element;
}

const InputWithValidate: React.FC<IProps> = ({
  // type = "text",
  // value = "",
  // placeholder = "",
  // onChange,
  // onKeyDown
  name,
  type = "text",
  placeholder,
  prefix
}) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { target : { value}  } = e
  //   setInputValue(value)
  //   if(onChange) onChange(e)
  // }

  return (
    <Field
      name={name}
      render={({ field }: { field: any }) => (
        <Input
          type={type}
          prefix={prefix}
          {...field}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default InputWithValidate;
