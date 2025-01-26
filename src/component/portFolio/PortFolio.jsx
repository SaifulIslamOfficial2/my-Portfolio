import one from "../../assets/image/one.jpg"
import { FaRegHeart } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function PortFolio() {
  return (
    <div className="mt-20">
      <div className="mt-12 flex justify-center">
        <div><p className="text-green-400 uppercase mb-2 ">
          Visit my portfolio and keep your feedback
        </p>
        <h1 className="text-slate-300 font-bold text-5xl font-titleFontFont text-center mb-8">My Portfolio</h1>
        </div>
      </div>
      {/*portfolio card section */}
      <div className=" grid grid-cols-3 ">
            <div className=" cursor-pointer bg-bodyColor shadow-shadowOne rounded-md w-[300px] hover:bg-hoverbg  p-4 ">
                <div className=" transition-transform hover:scale-105 duration-300">
                    <img className=" rounded object-cover" src={one} alt="" />
                </div>
                <div className="mt-3 flex  items-center justify-between">
                    <span className="text-green-400">Figma</span>
                    <div className="flex items-center gap-1 text-lightText">
                    <FaRegHeart className="hover:text-green-400" />360</div>
                </div>
              <div className=" flex hover:text-white group  ">
              <h2 className="text-2xl hover:text-white text-lightText font-semibold ">The services provide for design</h2>
          <p className="mt-11 mr-12 ">    <FaArrowUpRightFromSquare className="  group-hover:opacity-100  duration-300 opacity-0" /></p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default PortFolio;
