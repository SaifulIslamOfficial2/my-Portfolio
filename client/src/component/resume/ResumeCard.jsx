import { Link } from "react-router-dom";

function ResumeCard() {
  return (
    <div className="text-white w-full h-1/3 group flex">
      <div className=" w-10 h-[6px] bg-black bg-opacity-30 mt-16 relative">
        <span className="absolute w-5 h-5 bg-black rounded-full -top-2 -left-3 flex justify-center bg-opacity-60">
          <span className="w-3 h-3 top-1 left-1 absolute inline-flex bg-bodyColor group-hover:bg-green-400 rounded-full"></span>
        </span>
      </div>

      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 py-2 flex flex-col justify-center gap-10 shadow-shadowOne">
        <div className="flex  border-b-2 border-black border-opacity-30 pb-8  items-center justify-between">
          <div className=" ">
            <h3 className="md:text-2xl text-xl font-semibold mb-2 text-lightText ">
              Diploma in Computer Science
            </h3>
            <p className="text-lightText">Ahmad IT solution (2023 - 2025)</p>
          </div>
          <div>
            <Link className="py-2 px-6  rounded   font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600    ">
            3.90/4
            </Link>
          </div>
        </div>

        <div>
          <p className="text-lightText ">The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
