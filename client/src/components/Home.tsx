import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 md:p-6">
        {books?.map((book) => (
          <div
            key={book._id}
            className=" relative group overflow-hidden rounded-lg"
          >
            <img
              alt={book.title}
              className="w-50  h-50"
              height={400}
              src={book.imageUrl}
              style={{
                aspectRatio: '400/400',
                // objectFit: 'cover',
              }}
              width={400}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">{book.title}</h3>
              <h2 className=" text-md text-gray-500 dark:text-gray-400">
                {book.author}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {book.quote}
              </p>
              <Button
                className="h-[25px]"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
