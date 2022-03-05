import { ChangeEvent } from "react";

export interface CheckBoxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  checked?: boolean;
}
