import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handleNextPage = () => {
    setIsLoading(true); // Set loading to true when the next page is clicked
    onPageChange(currentPage + 1); // Change to the next page
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Simulate data loading (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is loaded
    }, 1000); // Adjust the time as needed for your actual data fetching
  };

  const handlePreviousPage = () => {
    setIsLoading(true); // Set loading to true when the previous page is clicked
    onPageChange(currentPage - 1); // Change to the previous page
    window.scrollTo(0, 0); // Scroll to the top of the page

    setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is loaded
    }, 1000); // Adjust the time as needed for your actual data fetching
  };

  const handlePageNumberClick = (page) => {
    setIsLoading(true); // Set loading to true when a page number is clicked
    onPageChange(page); // Navigate directly to the clicked page
    window.scrollTo(0, 0); // Scroll to the top of the page

    setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is loaded
    }, 1000); // Adjust the time as needed for your actual data fetching
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of pages to show at once (can be adjusted)

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageNumberClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        {isLoading ? (
          <div className="spinner"></div> // Display the spinner when loading
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default Pagination;