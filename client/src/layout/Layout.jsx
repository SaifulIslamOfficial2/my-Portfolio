import Banner from "../component/banner/Banner"
import Contact from "../component/contact/Contact"
// import Contact from "../component/contact/Contact"
import Features from "../component/features/Features"
import PortFolio from "../component/portFoliSection/PortFolio"
import Resume from "../component/resume/Resume"
import Testimonial from "../component/testimonial/Testimonial"

function Layout() {
  return (
    
    <>
    <Banner/>
    <Features/>
    <PortFolio/>
    <Resume/>
    <Testimonial/>
    <Contact/>
    </>
  )
}

export default Layout