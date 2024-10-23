import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

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
        !btnRef.current.contains(e.target)) ||
      menuRef.current.contains(e.target)
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
      className={`fixed top-0 right-0 left-0 text-lg text-white px-9 md:px-16 py-4 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="flex md:hidden justify-between items-center">
        <a href="#">
          <img src={logo} alt="Logo Company" className="w-24" />
        </a>
        <button
          ref={btnRef}
          className="flex md:hidden text-white"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars-staggered fa-xl"></i>
        </button>
        <div
          ref={menuRef}
          className={`flex flex-col absolute top-[4.2rem] left-0 right-0 bg-blue-gray-600 text-base transition-all duration-200 ease-in-out ${
            isOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-100 overflow-hidden"
          }`}
        >
          <a
            href="#"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Inicio
          </a>
          <a
            href="#"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Servicios
          </a>
          <a
            href="#"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Herramientas
          </a>
          <a
            href="#"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="font-medium hover:text-red-500 hover:bg-blue-gray-700 transition duration-200 px-8 py-3"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="Logo Company" className="w-28" />
        </a>
        <ul className="flex gap-10">
          <li>
            <a
              href="#"
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Herramientas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold hover:text-red-500 transition duration-200"
            >
              Nosotros
            </a>
          </li>
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
