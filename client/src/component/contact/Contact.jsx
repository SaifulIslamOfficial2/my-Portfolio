import { Link } from "react-router-dom";
import cntimg from "../../assets/image/contactimg.jpg";
import ContactLeft from "./ContactLeft";
function Contact() {
  return (
    <section className="mt-12 max-w-7xl mx-auto pt-12">
      {/* Section Title */}
      <div className="mt-12 flex justify-center">
        <div className="text-center">
          <p className="text-green-400 uppercase mb-2">Contact</p>
          <h1 className="text-slate-300 font-bold text-5xl text-center mb-8">
            Contact With Me
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex justify-between">
          {/* Left Content */}
          <div className="bg-black  bg-opacity-20 hover:bg-opacity-30 duration-300 w-[35%] shadow-shadowOne h-full p-5 items-center rounded">
            <img src={cntimg} alt="contact" className="rounded" />
            <ContactLeft />
          </div>

          {/* Right Content */}
          <div className="w-[60%] h-full relative items-center">
            <form className="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-10 flex flex-col justify-center gap-10 shadow-lg">
              <div className=" flex gap-8 ">
                <div className="w-1/2">
                 <div className="space-y-2">
                 <p className="text-lightText font-semibold">NAME</p>
                  <input
                      className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
                      type="text"
                    />
                 </div>
                </div>
                <div className="w-1/2">
                 
                <div className="space-y-2">
                 <p className="text-lightText font-semibold">PHONE NUMBER</p>
                  <input
                      className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
                      type="number"
                    />
                 </div>
                </div>
              </div>

              <div className="space-y-2">
                 <p className="text-lightText font-semibold">EMAIL</p>
                  <input
                      className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
                      type="email"
                    />
                 </div>

                 <div className="space-y-2">
                 <p className="text-lightText font-semibold uppercase">Subject</p>
                  <input
                      className="w-full text-white h-11 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"
                      type="email"
                    />
                 </div>

                 <div className="space-y-2">
                 <p className="text-lightText font-semibold uppercase">Subject</p>
                <textarea   className="w-full  text-white h-24 rounded-lg border-b-[1px] border-t-[2px] border-l-[2px] border-r-[2px] border-r-bodyColor border-t-bodyColor border-l-bodyColor border-b-gray-600 bg-black bg-opacity-30 active:outline-none focus-visible:outline-green-400 outline-none px-4 focus-visible:border-b-transparent duration-300"  name="" id=""></textarea>
                 </div>

                 <div className="  py-2 px-6 text-center  rounded hover:bg-[#1c1e26]  font-semibold text-green-400 shadow-shadowOne hover:text-green-600 w-full  hover:translate-y-[-10px] duration-300 ">
            <Link >
              Login
            </Link>
          </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
