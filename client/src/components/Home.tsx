import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

type Book = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  quote: string;
}[];

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book | null>(null);

  useEffect(() => {
    getAllBooks();
  }, [books]);

  async function getAllBooks() {
    try {
      const result = await axios.get('http://localhost:5000/books');
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`http://localhost:5000/books/${id}`);
      if (res.status === 201) toast.success('Book deleted successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Delete operation failed');
    }
  }

  return (
    <>
      <Link className=" mx-1 flex justify-end" to="/create">
        <Button>Create</Button>
      </Link>
      {books?.map((book) => (
        <div
          key={book._id}
          className=" p-2 items-center container gap-4 flex  border-l-sky-500"
        >
          <img className="w-[8.5%]" src={book.imageUrl} alt={book._id} />
          <div className=" flex-col flex items-start justify-start">
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.quote}</span>
            <Button onClick={() => handleDelete(book._id)}>Delete</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
