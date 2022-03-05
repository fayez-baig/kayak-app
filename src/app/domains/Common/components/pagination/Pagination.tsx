import { FC, ReactElement } from "react";
import { PaginationProps } from "./types";
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
        className="btn"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span className="pagination-info">{`${currentPage} of ${totalPage}`}</span>
      <button
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
