import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const items = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Servicios",
      link: "/servicios",
    },
    {
      name: "Herramientas",
      link: "/herramientas",
    },
    {
      name: "Nosotros",
      link: "/nosotros",
    },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (e) => {
    // Cierra el menú si se hace clic fuera de él
    if (
      (!menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target))
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agrega un listener para el scroll
    window.addEventListener("scroll", handleScroll);
    // Agrega un listener para cerrar el menú al hacer clic fuera
    document.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 text-lg text-white px-7 md:px-16 py-4 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-blue-gray-700" : "bg-transparent"
      }`}
    >
      {/* Navbar responsive mobile */}
      <div className="flex md:hidden justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo Company" className="w-24" />
        </a>
        <button
          ref={btnRef}
          className="flex md:hidden text-white"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>
        <div
          ref={menuRef}
          className={`flex flex-col absolute top-[3.9rem] left-0 right-0 bg-gray-900 text-base transition-all duration-200 ease-in-out ${
            isOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-100 overflow-hidden"
          }`}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {/* Navbar desktop */}
      <div className="container hidden md:flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo Company" className="w-28" />
        </a>
        <ul className="flex gap-10">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="font-semibold hover:text-red-500 transition duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          style={{ boxShadow: "0 3px 0 0 white" }}
          className="btn-contact bg-yellow-700 border-2 hover:bg-yellow-800 border-black rounded-full px-6 py-2 text-black font-medium transition duration-500 hover:text-white"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};
