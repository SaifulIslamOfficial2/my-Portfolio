import ResumeCard from "./ResumeCard"
import { motion } from "framer-motion"

function Skills() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className=" w-full flex gap-8">
    <div className=" w-1/2">
      <div>
        <span className="text-green-400 "> Features</span>
        <h2 className="text-slate-300 font-bold text-4xl">
        Design Skill
        </h2>
      </div>
      <div className=" w-full  mt-8  ">
      <div className="mt-3">
          <p className=" text-lightText font-medium">FIGMA</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-30 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-full  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">100%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">FIGMA</p>
          <span className=" w-[80%] h-2 inline-flex bg-black opacity-30 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-full  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">80%</span>
            </motion.span>
          </span>
         </div>
      </div>
    </div>





    <div className=" w-1/2">
      <div>
        <span className="text-green-400 ">Features </span>
        <h2 className="text-slate-300 font-bold text-4xl">
        Development Skill
        </h2>
      </div>
      <div className=" w-full mt-8  ">
       
      </div>
    </div>
  </motion.div>
  )
}

export default Skills