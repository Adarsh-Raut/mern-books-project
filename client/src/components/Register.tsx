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
  
const Register = () => {
  return (
    <Card className="m-2 w-[40%]" >
    <CardHeader>
      <CardTitle>Register</CardTitle>
      <CardDescription>Register with your email</CardDescription>
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
      <Button>Register</Button>
    </CardFooter>
  </Card>
  )
}

export default Register