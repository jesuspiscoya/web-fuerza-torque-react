import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import img1 from "../assets/img1.png";

export const Home = () => {
  return (
    <>
      <Slider />
      <Navbar />
      <div className="bg-gradient-to-t from-gray-900 to-blue-gray-900 px-10 md:px-24 py-7">
        <div className="container min-h-screen flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex flex-col gap-7 text-center md:text-start">
            <h1 className="text-6xl md:text-8xl caveat-700 text-white">
              ¿Quiénes somos?
            </h1>
            <p className="md:text-lg text-yellow-50">
              Somos una empresa 100% peruana, conformada por un equipo técnico
              multidisciplinario con amplia experiencia en el servicio de e
              mantenimiento reparación y alquiler de herramientas hidráulicas,
              neumáticas y eléctricas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-7">
              <div className="flex items-center">
                <i className="fa-solid fa-wrench fa-beat mr-4 text-yellow-700"></i>
                <span className="text-yellow-50">Herramientas hidráulicas</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-wrench fa-beat mr-4 text-yellow-700"></i>
                <span className="text-yellow-50">Herramientas neumáticas</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-wrench fa-beat mr-4 text-yellow-700"></i>
                <span className="text-yellow-50">Herramientas eléctricas</span>
              </div>
            </div>
          </div>
          <img
            src={img1}
            alt="Sobre nosotros"
            className="md:max-w-[36rem] ring-2 ring-blue-gray-200 rounded-xl shadow-lg md:shadow-2xl shadow-yellow-700 md:shadow-yellow-700 object-cover mb-4 md:mb-0"
          />
        </div>
      </div>
      <div className="relative flex min-h-screen md:overflow-hidden">
        <div className="parallax-bg" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75">
          <div className="container flex flex-col py-7 md:flex-row md:gap-10 text-center items-center h-full">
            <h1 className="caveat-700 text-5xl md:text-8xl text-yellow-700 md:text-white px-20 md:w-1/2">
              ¿Qué hacemos?
            </h1>
            <div className="md:w-1/2 text-center p-8 md:px-14 flex flex-col justify-center md:bg-black/70 rounded-3xl md:ring-1 md:shadow-2xl md:shadow-black">
              <h1 className="hidden md:block text-xl md:text-2xl font-bold text-yellow-700">
                SOLUCIONES
              </h1>
              <div className="hidden md:block h-0.5 bg-red-600 w-28 mx-auto mt-1 mb-5"></div>
              <p className="text-gray-300 text-sm">
                <strong>FUERZA Y TOQUE COMPANY</strong> se destaca como un líder
                en el mercado, brindando herramientas y servicios especializados
                de gran calidad.
              </p>
              <div className="flex flex-col md:flex-row mt-9 gap-7 md:gap-10">
                <div className="rounded-2xl shadow-lg shadow-blue-gray-700 bg-blue-gray-900 border-2 border-yellow-300 w-full p-6 md:py-10 md:px-6 hover:scale-105 duration-500 hover:shadow-md">
                  <i className="fa-solid fa-medal fa-2xl text-white"></i>
                  <h2 className="text-yellow-700 text-2xl my-4 font-semibold caveat-700">
                    Alta Calidad
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Nuestros servicios se distinguen por su excelencia y alta
                    calidad, con el compromiso de garantizar trabajos seguros y
                    precisos
                  </p>
                </div>
                <div className="rounded-2xl shadow-lg shadow-blue-gray-700 bg-blue-gray-900 border-2 border-yellow-300 w-full p-6 md:py-10 md:px-6 hover:scale-105 duration-500 hover:shadow-md">
                  <i className="fa-solid fa-helmet-safety fa-2xl text-red-700"></i>
                  <h2 className="text-yellow-700 text-2xl my-4 font-semibold caveat-700">
                    Confianza y Servicio
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Nuestro equipo especializado está capacitado para
                    proporcionar un servicio personalizado a nuestros clientes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-gray-900 overflow-hidden py-14 md:py-28">
        <div className="parallax-bg-2 top-14 bottom-14 md:top-28 md:bottom-28" />
        <div className="relative h-full bg-black/70 text-yellow-50 w-full py-20 md:py-24">
          <div className="container flex flex-col gap-7">
            <div className="flex flex-col items-center text-center md:items-start">
              <h1 className="text-xl md:text-2xl font-bold text-yellow-700">
                NUESTRAS MARCAS
              </h1>
              <div className="h-0.5 bg-red-600 w-40 md:w-52 mt-1 mb-5"></div>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
