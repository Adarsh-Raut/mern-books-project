import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateBook from './CreateBook';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);
  async function getAllBooks() {
    const result = await axios.get('http://localhost:5000/books');
    setBooks(result.data);
  }

  return (
    <>
      <Link className=" flex justify-end" to="/create">
        Create
      </Link>
      {books.length > 0 &&
        books.map((book) => (
          <div className=" p-2 items-center container gap-4 flex  border-l-sky-500">
            <img className="w-[20%]" src={book.imageUrl} alt={book._id} />
            <div className=" flex-col flex items-start justify-start">
              <span>{book.title}</span>
              <span>{book.author}</span>
              <span>{book.quote}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default Home;
