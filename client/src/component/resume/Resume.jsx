import ResumeCard from "./ResumeCard";
import EducationQuality from "./ResumeCard";

function Resume() {
  return (
    <section className=" w-full py-20 border-b-[1px] border-b-black">
      <div className="mt-12 flex justify-center">
        <div className="  text-center">
          <p className="text-green-400 uppercase  mb-2 ">
            2+ Years of Experience
          </p>
          <h1 className="text-slate-300 font-bold text-5xl font-titleFontFont text-center mb-8">
            My Resume
          </h1>
        </div>
      </div>

      <div>
        <ul className=" grid w-ful grid-cols-4 mx-auto">
          <li
            className=" hover:border-green-400 border-none text-lightText w-full h-20 bg-black bg-opacity-25 text-xl flex justify-center 
         cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] "
          >
            Education
          </li>
          <li
            className="border-none text-lightText w-full h-20 bg-black bg-opacity-25 text-xl  flex justify-center 
         cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] "
          >
            Professional Skills
          </li>
          <li
            className="border-none text-lightText w-full h-20 bg-black bg-opacity-25 text-xl  flex justify-center 
         cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] "
          >
            Experience
          </li>
          <li
            className="border-none text-lightText w-full h-20 bg-black bg-opacity-25 text-xl  flex justify-center 
         cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] "
          >
            interview
          </li>
        </ul>
      </div>
      {/*Education Quality card */}
      <div className="py-12">
        <div className=" w-full flex gap-8">
          <div>
            <div>
              <span className="text-green-400 "> 2007 - 2025</span>
              <h2 className="text-slate-300 font-bold text-4xl">
                Education Quality
              </h2>
            </div>
            <div className=" w-full h-[800px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 items-center mt-8  ">
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
            </div>
          </div>

          <div>
            <div>
              <span className="text-green-400 "> 2007 - 2025</span>
              <h2 className="text-slate-300 font-bold text-4xl">
              Job Experience
              </h2>
            </div>
            <div className=" w-full h-[800px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 items-center mt-8  ">
              <ResumeCard />
              <ResumeCard />
              <ResumeCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
