import { NavLink } from 'react-router-dom';
import { ModeToggle } from './ui/mode-toggle';
import useLoginStore from './store';

const Navbar = () => {
  const isLogin = useLoginStore((state) => state.isLogin);

  return (
    <>
      {console.log(isLogin)}
      <nav className=" flex m-auto ">
        <div className=" flex items-center gap-2 justify-center m-auto">
          <NavLink
            className="flex items-center gap-2 hover:text-slate-500"
            to="/home"
          >
            <img className="size-10" src="/opened-book-4982.svg" alt="book" />
            <h1>BookBud</h1>
          </NavLink>
          <NavLink
            className={
              isLogin === false ? 'hidden' : '' + ' hover:text-slate-500'
            }
            to="/create"
          >
            Create
          </NavLink>
        </div>
        <div className=" justify-end p-2">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
