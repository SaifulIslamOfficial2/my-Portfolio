import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Navbar from "./component/navbar/Navbar";
import MyFooter from "./component/footer/MyFooter";

function App() {
  return (
    <div className=" w-full text-lightText h-auto bg-bodyColor ">
        <Navbar />
      <div className="w-full px-6   mx-auto ">
        <Routes>
          <Route
            path="*"
            element={
              <>
              
                <Routes>
                  <Route path="/" element={<Layout />} />
                </Routes>
              </>
            }
          ></Route>
        </Routes>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
