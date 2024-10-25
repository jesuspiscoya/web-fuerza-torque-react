import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/herramientas.jpg";
import img2 from "../assets/industrias.jpg";
import img3 from "../assets/industrias2.jpg";
import img4 from "../assets/asesoria.jpg";

export const Maintenance = () => {
  const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

  return (
    <>
      <Navbar />
      <div className="h-80 md:h-[25rem] bg-[url('../assets/mantenimiento.jpg')] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/70 flex justify-center items-center">
          <ScrollAnimation to="top">
            <h1 className="text-4xl md:text-6xl rubik font-bold text-yellow-700">
              Mantenimiento
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      <div className="p-7 md:p-16 bg-blue-gray-800">
        <div className="container flex flex-col md:flex-row gap-8 md:gap-14">
          <div className="flex flex-col text-center md:text-left gap-4 md:gap-5 w-full">
            <ScrollAnimation to="left" delay={200}>
              <span className="text-md md:text-lg rubik font-bold text-red-700">
                Servicio
              </span>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={400}>
              <h1 className="text-3xl md:text-4xl rubik font-bold text-yellow-700">
                Mantenimiento
              </h1>
            </ScrollAnimation>
            <ScrollAnimation to="left" delay={600}>
              <p className="text-sm md:text-md text-gray-300">
                Contamos con el servicio técnico de mantenimiento de equipos
                manuales, neumáticos, hidráulicos y eléctrico que va más allá de
                lo que se ofrece actualmente, es un servicio técnico integral
                que tiene como principales objetivos la orientación al cliente,
                con atención personaliza y profesional.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            to="bottom"
            className="w-full h-72 md:h-96"
            delay={800}
          >
            <Carousel
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {images.map((item, index) => (
                <div key={index} className="relative">
                  <img src={item.img} className="h-72 md:h-96 object-cover" />
                </div>
              ))}
            </Carousel>
          </ScrollAnimation>
        </div>
      </div>
      <div className="p-7 md:p-16 bg-blue-gray-900">
        <div className="container text-center flex flex-col gap-8 md:gap-10">
          <h1 className="text-4xl rubik font-bold text-yellow-700">Galería</h1>
          <div className="grid md:grid-cols-3 gap-5">
            {[...images, ...images].map((item, index) => (
              <ScrollAnimation
                key={index}
                to="bottom"
                className="relative"
                delay={index * 100}
              >
                <img
                  src={item.img}
                  className="h-48 w-full md:h-80 object-cover"
                />
                <div className="absolute hover:bg-black/50 transition-all duration-[600ms] top-0 bottom-0 left-0 right-0 cursor-pointer"></div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
