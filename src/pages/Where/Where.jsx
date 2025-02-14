import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Where.css';
import useFetch from '../../components/useFetch/useFetch';
import Skeleton from '../../components/Skeleton/Skeleton';

export default function Where() {
  const navigate =useNavigate()
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  // Retrieve state (heading and endpoint) from the navigate function
  const location = useLocation();
  const { heading, endpoint ,type } = location.state || {};

  // Movies/TV shows list and pagination
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // Update the endpoint to include the current page for pagination
  const paginatedEndpoint = `${endpoint}&page=${page}`;

  // Fetch the data from the API
  const { data, loading, error } = useFetch({ url: paginatedEndpoint });

  // Update the list when new data is fetched
  useEffect(() => {
    if (data && data.results) {
      setList((prevList) => [...prevList, ...data.results]); // Append new results
    }
  }, [data]);

  // Show more: Increment the page number
  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Ensure return structure remains unchanged
  if (loading) return <Skeleton />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="where-page">
      <h1>{heading}</h1>
      <div className="movie-grid">
        {list.map((item) => (
          <div className="movie-card" key={item.id} onClick={()=>{navigate(`/${type}/${item.id}`)}}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
            />
            {/* <h4>{item.title || item.name}</h4> */}
          </div>
        ))}
      </div>
      <div className="show-more">
        <button onClick={handleShowMore}>Show More</button>
      </div>
    </div>
  );
}
