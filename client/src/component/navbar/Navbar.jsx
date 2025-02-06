import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.jpg";


function Navbar() {
  return (
    <div className=" sticky top-0 z-50 bg-bodyColor ">
      <div className="flex p-2 justify-center">
        <p className=" text-red-600">This website is under constriction</p>
      </div>
      <div className="flex items-center justify-between  p-3  ">
        <div className="flex items-center gap-2 ">
          <img
            className="w-14 h-14 rounded-full cursor-pointer"
            src={logo}
            alt=""
          />
          <h1 className="text-green-400 font-titleFont font-bold hover:text-green-600 decoration-300 cursor-pointer ">
            SAIFUL ISALM
          </h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <ul className="flex gap-4  font-titleFont text-slate-300  ">
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link>Home </Link>
            </li>
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link>Features </Link>
            </li>
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link> 
              Portfolio</Link>
            </li>
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link>Resume
              </Link>
            </li>
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link>Clients </Link>
            </li>
            <li className="hover:text-green-400duration-300 uppercase">
              <Link>blog </Link>
            </li>
            <li className="hover:text-green-400 duration-300 uppercase">
              <Link> CONTACT</Link>
            </li>
          </ul>
          <div className="   hover:scale-110 duration-200 ">
            <Link className="py-2 px-6  rounded hover:bg-[#1c1e26]  font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 decoration-300   ">
              DOWNLOAD CV
            </Link>
          </div>
          <div className=" transition-transform  hover:scale-110 duration-300 ">
            <Link className="py-2 px-6  rounded hover:bg-[#1c1e26]  font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 decoration-300   ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
