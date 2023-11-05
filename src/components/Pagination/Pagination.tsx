import React from 'react';

interface PaginationProps {
  totalItems: number | undefined;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const getNextPage = () => {
    if (totalItems && totalItems > itemsPerPage * currentPage) {
      onPageChange(currentPage + 1);
    }
  };

  const getPrevPage = () => {
    if (currentPage >= 2) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center">
      <button type="button" onClick={getPrevPage} className="btn btn-primary">
        Previous
      </button>
      <button type="button" className="btn btn-primary" disabled>
        {currentPage}
      </button>
      <button type="button" onClick={getNextPage} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
