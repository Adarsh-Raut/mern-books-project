import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Form = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  async function registerUser(data) {
    const result = await axios.post('http://localhost:5000/auth/register', {
      email: data.email,
      password: data.password,
    });
    if (result.status === 201) {
      setIsRegistered((prevValue) => !prevValue);
      reset();
      navigate('/');
    }
  }

  async function loginUser(data) {
    const result = await axios.post('http://localhost:5000/auth/login', {
      email: data.email,
      password: data.password,
    });
    if (result.status === 200) {
      navigate('/home');
    }
  }

  return (
    <form
      className="flex items-center justify-center "
      onSubmit={handleSubmit((data) =>
        isRegistered ? loginUser(data) : registerUser(data),
      )}
    >
      <Card className=" md:w-[40%]">
        <CardHeader>
          <CardTitle>{isRegistered ? 'Login' : 'Register'}</CardTitle>
          <CardDescription>
            {isRegistered
              ? 'Login with your email and password.'
              : 'Register with your email.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email', { required: true })}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register('password', { required: true })}
                id="password"
                type="password"
                autoComplete="on"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button>{isRegistered ? 'Login' : 'Register'}</Button>
        </CardFooter>
        <CardDescription className="m-2 flex justify-start hover:text-slate-500">
          <Link
            onClick={() => setIsRegistered((prevValue) => !prevValue)}
            to="/"
          >
            {isRegistered
              ? "Don't have an account? Register here."
              : 'Already have an account? Login here.'}
          </Link>
        </CardDescription>
      </Card>
    </form>
  );
};
