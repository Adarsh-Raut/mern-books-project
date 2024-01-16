import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
  
const Register = () => {
 const [isRegistered, setIsRegistered] = useState(true)
 const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center w-auto">
    <Card className=" md:w-[40%]" >
    <CardHeader>
      <CardTitle>{isRegistered ? "Login" : "Register" }</CardTitle>
      <CardDescription>{
        isRegistered ? "Login with your email and password." : "Register with your email." 
      }</CardDescription>

    </CardHeader>
    <CardContent>
      <div className="grid w-full gap-4" >
        <div className="grid gap-2" >
        <Label htmlFor="email" >Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2" >
        <Label htmlFor="password" >Password</Label>
        <Input id="password" type="password" />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button onClick={() => navigate('/home')} >{isRegistered ? "Login" : "Register"}</Button>

    </CardFooter>
    <CardDescription className="m-2" >
      <Link onClick={() => setIsRegistered((prevValue) => !prevValue)} to="/">{isRegistered ? "Don't have an account? Register here." : "Already have an account? Login here."}</Link>
    </CardDescription>

  </Card>
</div>
  )
}

export default Register