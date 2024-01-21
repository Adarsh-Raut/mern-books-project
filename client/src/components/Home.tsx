import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import toast from 'react-hot-toast';
import { Card } from '@/components/ui/card';

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

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
        <Card className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Book Cover"
            className="object-cover w-full h-60"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: '400/600',
              objectFit: 'cover',
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Book Title</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Author Name
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A brief description of the book.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Book Cover"
            className="object-cover w-full h-60"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: '400/600',
              objectFit: 'cover',
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Book Title</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Author Name
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A brief description of the book.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Book Cover"
            className="object-cover w-full h-60"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: '400/600',
              objectFit: 'cover',
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Book Title</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Author Name
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A brief description of the book.
            </p>
          </div>
        </Card>
      </div> */}

      {/* <div className="flex flex-wrap justify-center ">
        {books?.map((book) => (
          <div key={book._id} className="m-2 w-[200px] border-l-sky-500">
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
      </div> */}
    </>
  );
};

export default Home;
