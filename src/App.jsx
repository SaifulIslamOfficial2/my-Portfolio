import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className=" w-full h-auto bg-bodyColor ">
      <div className="w-full p-6 mx-auto ">
      <Routes>
        <Route
          path="*"
          element={
            <>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Layout />} />
              </Routes>
            </>
          }
        ></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
