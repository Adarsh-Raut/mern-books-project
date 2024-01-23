import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from './ui/mode-toggle';

const Navbar = () => {
  return (
    <>
      <div className=" m-2 flex gap-3 items-center justify-end">
        <NavLink className=" flex items-center gap-2" to="/home">
          <img className="size-10" src="/opened-book-4982.svg" alt="book" />
          <h1>BookBud</h1>
        </NavLink>
        <NavLink to="/create">Create</NavLink>
        <div className=" ">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
