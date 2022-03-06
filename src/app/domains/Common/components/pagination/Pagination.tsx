import { FC, ReactElement } from "react";
import { PaginationProps } from "./types";
import { NEXT_BUTTON_TEST_ID, PREV_BUTTON_TEST_ID } from "utils/constants";
import "./pagination.scss";

const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  totalAirlinesData,
  paginate,
  currentPage,
}): ReactElement => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalAirlinesData / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPage = pageNumbers.length - 1;

  return (
    <div className="pagination-container">
      <button
        type="button"
        data-testid={PREV_BUTTON_TEST_ID}
        className="btn"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span
        data-testid="info"
        className="pagination-info"
      >{`${currentPage} of ${totalPage}`}</span>
      <button
        type="button"
        data-testid={NEXT_BUTTON_TEST_ID}
        className="btn"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
