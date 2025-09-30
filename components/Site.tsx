import ClientOnly from "@/components/ClientOnly";
import ViewProgress from "@/components/motion/ViewProgress";
import Header from "@/components/sections/Header";
import DotMount from "@/components/sections/DotMount";
import SnapPage from "@/components/SnapPage";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Rooms from "@/components/sections/Rooms";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import Inquiry from "@/components/sections/Inquiry";
import Footer from "@/components/sections/Footer";

export default function Site(){
  return (<>
    <Header/>
    <ClientOnly><ViewProgress/></ClientOnly>
    <DotMount/>
    <SnapPage>
      <Hero/>
      <Features/>
      <Rooms/>
      <Testimonials/>
      <FAQ/>
      <Location/>
      <Inquiry/>
      <Footer/>
    </SnapPage>
  </>);
}
