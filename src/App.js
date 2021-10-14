import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Posts from './component/Posts/Posts';
import Pagination from './component/Pagination/Pagination'


function App() {

  const [storys, setStory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPages, setCurrentPages] = useState(1);
  const [storyPerPage, setStoryPerPage] = useState(10);



  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/albums'); //https://jsonplaceholder.typicode.com/comments
      setStory(res.data);
      setLoading(false);
    }

    fetchPosts()
  }, [])

  console.log(storys)

  const indexOfLastPosts = currentPages * storyPerPage;
  const indexOfFirstPage = indexOfLastPosts - storyPerPage
  const currentStory = storys.slice(indexOfFirstPage, indexOfLastPosts )

  
   const paginate = (pageNumber) => setCurrentPages(pageNumber);

  return (
    <div className="container mt-3">

      <h2 className="text-primary mb-3">A Simple Pagination With React JS</h2>
      <Posts storys={currentStory} loading={loading} />
      <Pagination postPerPage={storyPerPage} totalPosts={storys.length} paginate={paginate} />
    </div>
  );
};



export default App;
