import logo from "../assets/logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#051029f6] text-white text-center flex flex-col gap-8 md:gap-14 px-8 py-7 md:py-10 md:px-16">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-7 md:gap-0">
          <img src={logo} alt="Logo de la empresa" className="h-16 md:h-20 my-auto" />
          <div className="flex gap-7">
            <a
              href="#"
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-blue-400"
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-red-500"
            >
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="font-medium transition-colors duration-500 hover:text-[#3ae44b]"
            >
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end gap-6 max-w-56">
          <h1 className="text-lg font-semibold text-red-700 cursor-default">
            Productos
          </h1>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Herramientas hidráulicas
          </a>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Herramientas neumáticas
          </a>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Herramientas eléctricas
          </a>
        </div>
        <div className="hidden md:flex flex-col items-end gap-6 max-w-56">
          <h1 className="text-lg font-semibold text-red-700 cursor-default">
            Servicios
          </h1>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Mantenimiento
          </a>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Reparación
          </a>
          <a
            href="#"
            className="text-sm transition-colors duration-500 pb-1 hover:text-yellow-600 ring-bottom hover:border-yellow-700"
          >
            Alquiler
          </a>
        </div>
        <div className="flex flex-col md:items-end gap-6 md:max-w-56">
          <h1 className="text-lg font-semibold text-red-700 cursor-default">
            Contáctanos
          </h1>
          <div className="md:text-end">
            <i className="fa-solid fa-map-marker-alt me-2"></i>
            <span className="text-sm cursor-default">
              Lt 14. residencial Las Orquideas etapa 1, Callao - Perú
            </span>
          </div>
          <div className="md:text-end">
            <i className="fa-solid fa-phone me-2"></i>
            <span className="text-sm cursor-default">+51 948 911 431</span>
          </div>
          <div className="md:text-end">
            <i className="fa-solid fa-clock me-2"></i>
            <span className="text-sm cursor-default">
              L-V de 08:00 am a 06:00 pm
              <br />
              Sáb. de 09:00 am a 12:00 pm
            </span>
          </div>
        </div>
      </div>
      <hr className="border-blue-gray-600 border-1 shadow-mlg shadow-blue-400" />
      <div className="flex flex-col md:flex-row gap-7 justify-between">
        <div className="flex flex-col items-start">
          <span className="text-xs">
            <strong>FUERZA & TORQUE COMPANY E.I.R.L. RUC 20606757311</strong>
          </span>
          <span className="text-xs">
            © Copyright {year} | Todos los derechos reservados
          </span>
        </div>
        <span className="text-sm">
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/jesuspiscoya/"
            target="_blank"
            className="text-red-700 hover:text-yellow-700 transition-colors duration-500"
          >
            <strong>Jesus Piscoya</strong>
          </a>
        </span>
      </div>
    </footer>
  );
};
