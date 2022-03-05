export interface FilterProps {
  checkedValues: string[];
  setCheckedValues: (data: string[]) => void;
  setCurrentPage: (data: number) => void;
}

export interface handleCheckedTypes {
  target: { value: string };
}
