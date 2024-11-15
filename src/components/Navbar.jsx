import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] shadow-lg transition duration-300 ${
        sticky ? "bg-white text-gray-900" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        <div className="mx-7">
          <h4 className="text-4xl font-bold uppercase">
            <span className="text-cyan-600">MyPortfolio</span>
          </h4>
        </div>
        
        {/* Desktop Menu */}
        <div
          className={`hidden md:block text-gray-900 ${
            sticky ? "bg-white/80" : ""
          } rounded-full`}
        >
          <ul className="flex items-center gap-6 text-lg font-medium">
            {menuLinks.map((menu, i) => (
              <li key={i} className="hover:text-cyan-600 transition duration-300">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl md:hidden m-5 transition duration-300 ${
            open ? "text-gray-900" : "text-white"
          }`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full h-screen px-7 py-4 font-medium bg-white top-0 transition-transform duration-300 ${
            open ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 text-lg text-gray-900">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="hover:text-cyan-600 transition duration-300"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

