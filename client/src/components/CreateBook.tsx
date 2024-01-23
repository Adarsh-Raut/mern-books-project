import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from './ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FieldValue, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  async function createBook(data) {
    try {
      const { title, author, imageUrl, quote } = data;
      const result = await axios.post('http://localhost:5000/books', {
        title,
        author,
        imageUrl,
        quote,
      });
      if (result.status === 201) {
        reset();
        navigate('/home');
        toast.success('Book created successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid gap-4 w-full max-w-md mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold text-center">Add a Book</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit((data) => createBook(data))}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="book-title">Book Title</Label>
          <Input
            {...register('title', { required: true })}
            id="book-title"
            placeholder="Enter book title"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            {...register('author', { required: true })}
            id="author"
            placeholder="Enter author's name"
            type="text"
          />
          <div className="space-y-2">
            <Label htmlFor="image-url">Image URL</Label>
            <Input
              {...register('imageUrl', { required: true })}
              id="image-url"
              placeholder="Enter image URL"
              type="url"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            {...register('quote', { required: true })}
            className="min-h-[100px]"
            id="description"
            placeholder="Enter book description"
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateBook;
