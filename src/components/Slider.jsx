import { Carousel } from "@material-tailwind/react";
import { ScrollAnimation } from "./ScrollAnimation";
import img1 from "../assets/herramientas.jpg";
import img2 from "../assets/industrias.jpg";
import img3 from "../assets/industrias2.jpg";
import img4 from "../assets/asesoria.jpg";

export const Slider = () => {
  const pharagraph = [
    {
      img: img1,
      title: "Alquiler de Herramientas Hidráulicas y Neumáticas",
      description:
        "Ahorra en costos y espacio con una amplia gama de herramientas neumáticas en alquiler para todo tipo de proyectos, ideal para profesionales y aficionados",
    },
    {
      img: img2,
      title: "Mantenimiento Especializado",
      description:
        "Nuestros expertos realizan un mantenimiento preventivo y correctivo para asegurar el máximo rendimiento y durabilidad de tus herramientas",
    },
    {
      img: img3,
      title: "Reparación Rápida y Eficiente",
      description:
        "Ofrecemos servicios de reparación rápida y efectiva, con piezas de alta calidad y un servicio al cliente excepcional",
    },
    {
      img: img4,
      title: "Asesoría Personalizada",
      description:
        "¿No sabes qué herramienta necesitas? Nuestro equipo te ofrece asesoría personalizada para encontrar la solución perfecta según tus requerimientos y presupuesto",
    },
  ];

  return (
    <Carousel
      className="h-screen"
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
      {pharagraph.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.img} className="h-screen w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 text-gray-300 flex flex-col gap-12">
              <ScrollAnimation to={"top"} delay={200}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-700 lilita-one-regular">
                  {item.title}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation to={"left"} delay={700}>
                <p className="text-base md:text-xl font-medium">
                  {item.description}
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
