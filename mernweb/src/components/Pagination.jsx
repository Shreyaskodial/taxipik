import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function Pagination({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



    const [booking, setBookings] = useState([]);

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

  const handleConfirm = async (booking) => {
    try {
      // Send a POST request to save the booking
      await axios.post('/savebooking', booking);
      console.log('Booking confirmed and saved in another table');
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`/bookings/${bookingId}`);
      // After successful deletion, update the bookings state by filtering out the deleted booking
      setBookings(booking.filter(booking => booking._id !== bookingId));
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <table className="table table-hover table-nowrap">
        <thead className="thead-light">
        <tr>
                                    <th scope="col">Pickup Location</th>
                                    <th scope="col">Drop Location</th>
                                    <th scope="col">Capacity</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile number</th>
                                    <th scope="col">Start date</th>
                                    <th scope="col">End date</th>
                                    <th>Status</th>
                                </tr>
        </thead>
        <tbody>
          {currentPageData.map(booking => (
            <tr key={booking._id}>
              <td>{booking.pickup}</td>
              <td>{booking.drop}</td>
              <td>{booking.capacity}</td>
              <td> {booking.email}</td>
              <td>{booking.startdate}</td>
              <td>{booking.enddate}</td>
              <td>{booking.phone}</td>
              <td> <button  className=' btn-outline-primary' onClick={() => handleConfirm(booking)}>Confirm</button></td>   
            <td className='text-primary'><NavLink  to="/bookingsupdate" ><i class="bi bi-eye"></i> </NavLink></td>   
            <td className='text-danger' onClick={() => handleDelete(booking._id)}><i class="bi bi-trash"></i></td>
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
