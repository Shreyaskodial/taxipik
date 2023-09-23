import React, { useState } from 'react';

function Pagination({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="table table-hover table-nowrap">
        <thead className="thead-light">
          {/* ... Table headers ... */}
        </thead>
        <tbody>
          {currentPageData.map(booking => (
            <tr key={booking._id}>
              <td>{booking.pickup}</td>
              <td>{booking.drop}</td>
              <td>{booking.capacity}</td>
              <td>{booking.startdate}</td>
              <td>{booking.enddate}</td>
              <td>{booking.phone}</td>
              {/* ... other fields */}
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Table pagination">
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a href="#" className="page-link text-primary " onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
