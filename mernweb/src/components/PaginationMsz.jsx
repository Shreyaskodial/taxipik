import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaginationMsz({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
      
      // Fetch data from the API
      axios.get('/messages')
          .then(response => {
              setMessages(response.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (messageId) => {
      try {
          await axios.delete(`/messages/${messageId}`);
          // After successful deletion, update the messages state by filtering out the deleted message
          setMessages(messages.filter(message => message._id !== messageId));
      } catch (error) {
          console.error(error);
      }
  };
  useEffect(() => {

  }
      , []);

  
  return (
    <div>
      <table className="table table-hover table-nowrap">
        <thead className="thead-light">
          <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">E-mail</th>
                                                <th scope="col">Message</th>
                                                <th></th>
                                            </tr>
        </thead>
        <tbody>
          {currentPageData.map(messages => (
            <tr key={messages._id}>
              <td>{messages.name}</td>
              <td>{messages.email}</td>
              <td>{messages.message}</td>
              <td className='text-danger' onClick={() => handleDelete(messages._id)}><i class="bi bi-trash"></i></td>
              {/* ... other fields */}
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Table pagination">
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a href="#" className="page-link text-primary " onClick={() => handlePage(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PaginationMsz;
