import { Link, Links } from "react-router-dom";
import cntimg from "../../assets/image/contactimg.jpg";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";





function Contact() {


  return (
    <section className="mt-12 max-w-7xl mx-auto pt-12   ">
      {/* Section Title */}
      <div className="mt-12 mx-auto flex justify-center">
        <div className="text-center">
          <p className="text-green-400 uppercase mb-2">Contact</p>
          <h1 className="text-slate-300 font-bold text-5xl text-center mb-8">
            Contact With Me
          </h1>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full lg:flex gap-8 sm:gap-10 lg:gap-12 justify-between">
          {/* Left Content */}
          <div className="bg-black  bg-opacity-20 hover:bg-opacity-30 duration-300 w-[35%] shadow-shadowOne h-full p-5 items-center rounded">
            <img src={cntimg} alt="contact" className="rounded" />
            <ContactLeft />
          </div>

          {/* Right Content */}
          <ContactRight/>
         
        </div>
      </div>
    </section>
  );
}

export default Contact;
