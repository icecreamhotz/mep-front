import React from "react";
import { Select } from "antd";
import { Field } from "formik";

const { Option } = Select;

interface IProps {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SelectWithValidate: React.FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange
}) => {
  return (
    <Field
      name={name}
      render={({ field }: { field: any }) => (
        <Select
          {...field}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        >
          <Option key={1} value="Apple">
            Apple
          </Option>
          <Option key={2} value="Orange">
            Orange
          </Option>
          <Option key={3} value="Mango">
            Mango
          </Option>
          <Option key={4} value="Pineapple">
            Pineapple
          </Option>
        </Select>
      )}
    />
  );
};

export default SelectWithValidate;
