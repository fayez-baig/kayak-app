export interface FilterProps {
  checkedValues: string[];
  setCheckedValues: (data: string[]) => void;
  setCurrentPage: (data: number) => void;
}

export interface HandleCheckedTypes {
  target: { value: string };
}
