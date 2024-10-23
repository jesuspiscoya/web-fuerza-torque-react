import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.jpg";

export const Carousel = () => {
  const brands = [
    { title: "Tarjeta 1", img: logo1 },
    { title: "Tarjeta 2", img: logo2 },
    { title: "Tarjeta 3", img: logo3 },
    { title: "Tarjeta 4", img: logo4 },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="rounded-lg bg-white border-2 border-yellow-600 shadow-lg shadow-blue-gray-700 h-24 w-44 p-4 mr-6 md:h-32 md:w-60 md:py-5 md:px-6 md:mr-12 flex flex-shrink-0 cursor-pointer"
          >
            <img
              src={brand.img}
              alt={brand.title}
              className="max-h-28 m-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
