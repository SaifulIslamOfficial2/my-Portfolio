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
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-full  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">100%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">PHOTOSHOT</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[80%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">80%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">DESIGN</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[90%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">90%</span>
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
      <div className="mt-3">
          <p className=" text-lightText font-medium">HTML</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-full  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">100%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">CSS</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[90%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">90%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">JAVASCRIPT</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[70%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">70%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium">REACT</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[80%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">80%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium uppercase">tailwindcss</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[75%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">75%</span>
            </motion.span>
          </span>
         </div>
         <div className="mt-3">
          <p className=" text-lightText font-medium uppercase">GitHub</p>
          <span className=" w-full h-2 inline-flex bg-black opacity-50 rounded-md mt-2">
            <motion.span  initial={{x: "-100%", opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className="bg-gradient-to-r from-lime-300 to-green-300 h-full w-[70%]  rounded-lg shadow-lg relative">
              <span className="text-white absolute -top-9 right-0 ">70%</span>
            </motion.span>
          </span>
         </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Skills