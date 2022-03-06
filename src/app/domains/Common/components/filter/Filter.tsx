import { FC, ReactElement } from "react";
import { ALLIANCES } from "utils/constants";
import { CheckBox } from "../ui";
import { FilterProps, HandleCheckedTypes } from "./types";
import { INITIAL_PAGE_NUMBER } from "utils/constants";

import "./filter.scss";

const Filter: FC<FilterProps> = ({
  checkedValues,
  setCheckedValues,
  setCurrentPage,
}): ReactElement => {
  const handleChecked = ({ target: { value } }: HandleCheckedTypes) => {
    setCurrentPage(INITIAL_PAGE_NUMBER);
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
        {ALLIANCES.map(({ code, name }) => (
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
