import { FC, ReactElement } from "react";
import { alliances } from "utils/helper";
import { CheckBox } from "../ui";
import { FilterProps, handleCheckedTypes } from "./types";
import "./filter.scss";

const Filter: FC<FilterProps> = ({
  checkedValues,
  setCheckedValues,
  setCurrentPage,
}): ReactElement => {
  const handleChecked = ({ target: { value } }: handleCheckedTypes) => {
    setCurrentPage(1);
    if (checkedValues.includes(value)) {
      const arr = checkedValues.filter((item) => item !== value);
      setCheckedValues(arr);
      return;
    }
    setCheckedValues([value, ...checkedValues]);
  };

  return (
    <>
      <h1 className="heading">Airlines</h1>
      <div className="subheading">Filter by Alliance</div>
      <div className="filter-wrapper">
        {alliances.map(({ code, name }) => (
          <CheckBox
            key={code}
            onChange={handleChecked}
            value={code}
            name={name}
            label={name}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
