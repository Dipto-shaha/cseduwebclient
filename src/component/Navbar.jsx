import  { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Academic", path: "/academic" },
    { id: 4, text: "People", path: "/people" },
    { id: 5, text: "Research", path: "/research" },
    { id: 6, text: "Student", path: "/student" },
    { id: 7, text: "Alumni", path: "/alumni" },
    { id: 8, text: "Events", path: "/events" },
    { id: 9, text: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-[#d2dde2] flex justify-between items-center h-20 mx-auto px-4 text-[#000] relative">
      {/* Logo */}
      <img
        src="https://i.ibb.co/VwJ6FWY/CSEDULogo-removebg-preview.png"
        className="w-20 h-20"
        alt="Logo"
      />
      <h1 className="w-full text-3xl font-bold text-[#000]">CSEDU</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300 hover:text-black"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav && <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#d2dde2] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]"
        }
      >
        {/* Close Button */}
        <div className="absolute top-0 right-0 m-4">
          <AiOutlineClose size={20} onClick={handleNav} />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link to={item.path} onClick={handleNav}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
