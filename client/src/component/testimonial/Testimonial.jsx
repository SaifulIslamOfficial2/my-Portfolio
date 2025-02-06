import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi from "../../assets/image/testi.jpg";
import quote from "../../assets/image/quote.png";

// Custom Arrow Components
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -top-2 right-20 bg-gray-800 hover:bg-green-500 shadow-shadowOne text-white p-3 rounded-full cursor-pointer transition z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -top-2 right-5 bg-gray-800 hover:bg-green-500 shadow-shadowOne text-white p-3 rounded-full cursor-pointer transition z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
}

// Testimonial Component
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="max-w-4xl mx-auto ">
      {/* Section Title */}
      <div className="mt-12 flex justify-center">
        <div className="text-center">
          <p className="text-green-400 uppercase mb-2">What Clients Say</p>
          <h1 className="text-slate-300 font-bold text-5xl text-center mb-8">
            Testimonial
          </h1>
        </div>
      </div>

      {/* Slider Container */}
      <div className="max-w-4xl mx-auto relative">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="w-full">
            <div className="w-full h-[450px] flex gap-8">
              {/* Left Content */}
              <div className="glass shadow-shadowOne h-full p-8 items-center rounded">
                <img
                  src={testi}
                  alt="man"
                  className="object-cover w-72 rounded"
                />
                <div>
                  <p className="uppercase text-green-400 font-medium mt-4">
                    bound - trolola
                  </p>
                  <p className="uppercase text-lightText font-semibold text-2xl mt-1">
                    Md Saiful Islam
                  </p>
                  <p className="text-slate-500">Web Developer</p>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-[60%] h-full relative items-center">
                <div className="flex justify-between items-center">
                  <div>
                    <img className="w-[20%]" src={quote} alt="quote" />
                  </div>
                </div>
                <div className="w-full h-[70%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-4 border-b border-black">
                        <div>
                          <h3 className="text-lightText font-semibold text-2xl">
                            Web App Development
                          </h3>
                          <p className="text-slate-500">
                            Upwork - Mar 4, 2016 - Aug 30, 2021
                          </p>
                        </div>
                        <div className="flex gap-2 text-amber-400">
                          {Array(5).fill(<FaStar />)}
                        </div>
                      </div>
                      <p className="text-slate-500">
                        Maecenas finibus nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis mauris hendrerit
                        ante. Ut tincidunt est ac dolor aliquam sodales
                        phasellus smauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
