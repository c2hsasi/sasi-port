// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const certi = [
  {
    id: 1,
    image: "src/assets/Guvi-cert.png",
  },
  {
    id: 2,
    image: "src/assets/Website-cert.png",
  },
  {
    id: 3,
    image: "src/assets/Edtech-cert.png",
  },
  {
    id: 4,
    image: "src/assets/KRISHNA-IC-cert.png",
  },
  {
    id: 5,
    image: "src/assets/Oracle-cert.png",
  },
  {
    id: 6,
    image: "src/assets/IC-cert.png",
  },
];

const Testimonial = () => {
  return (
    <div className="lg:px-12 px-4 my-32 py-12 bg-yellow-50 " id="testimonials">
      <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
        Certificates
      </h2>

      <br />
      <p className="text-xl text-headingcolor font-semibold mb-5">
        My Testimonials
      </p>

      {/* Certificates */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {certi.map((certi) => (
          <div
            key={certi.id}
            className="cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={certi.image}
              alt=""
              className="w-100 p-2 rounded-lg shadow-md mb-7"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
