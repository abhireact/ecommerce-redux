import { CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const CartIcon = ({ state: { isSidebar, setIsSidebar } }: any) => {
  return (
    <div onClick={() => setIsSidebar(!isSidebar)} className="relative">
      <IoCartOutline className="text-5xl" />
      <span className="absolute -top-[5px] right-0 bg-red-500 p-1 px-2 rounded-full text-white">
        0
      </span>
    </div>
  );
};

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <header className="w-full shadow-md">
      <nav className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <CiShoppingCart className="w-10 h-10 text-white p-2 bg-blue-400 rounded-full" />
          <span className="ml-3 text-xl">Clothify</span>
        </a>
        <nav className="md:ml-auto  md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to={"/checkout"} className="mr-5 hover:text-gray-900">
            Checkout
          </Link>
          <Link to={"/about"} className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <CartIcon state={{ isSidebar, setIsSidebar }} />
      </nav>
      <Sidebar state={{ isSidebar, setIsSidebar }} />
    </header>
  );
};

export default Header;
