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

  async function handleDelete(id: string) {
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
      <div className="flex justify-center flex-wrap">
        {books?.map((book) => (
          <div key={book._id} className="m-2  w-[200px] border-l-sky-500">
            <img
              className=" w-[100px] h-[100px] "
              src={book.imageUrl}
              alt={book._id}
            />
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
            <h2>{book.quote}</h2>
            <Button className="h-[25px]" onClick={() => handleDelete(book._id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
