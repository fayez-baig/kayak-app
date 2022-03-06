import { FC, ReactElement } from "react";
import { CheckBoxProps } from "./types";
import "./checkbox.scss";

const CheckBox: FC<CheckBoxProps> = ({
  onChange,
  value,
  label,
  name,
  checked,
  ...props
}): ReactElement => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        data-testid={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
