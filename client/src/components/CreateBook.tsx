import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
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
        toast.success('Book created successfull!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => createBook(data))}
      className=" flex items-center justify-center"
      autoComplete="off"
    >
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Add a Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4 justify-center">
            <div className=" flex flex-row gap-2 items-center">
              <Label htmlFor="title">Title:</Label>
              <Input {...register('title', { required: true })} id="title" />
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <Label htmlFor="author">Author:</Label>
              <Input {...register('author', { required: true })} id="author" />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Label htmlFor="imageUrl">ImageUrl:</Label>
              <Input
                {...register('imageUrl', { required: true })}
                id="imageUrl"
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Label htmlFor="quote">Quote:</Label>
              <Input {...register('quote', { required: true })} id="quote" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Add Book</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateBook;
