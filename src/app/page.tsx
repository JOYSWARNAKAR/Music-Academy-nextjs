import Footer from "@/components/Footer";
import FeaturedCourses from "../components/FeaturedCourses";
import HeroSection from "../components/HeroSection";
import Instructors from "../components/Instructors";
import UpcomingWebinars from "../components/UpcomingWebinars";
import WhyChooseUS from "../components/WhyChooseUS";
import MusicSchoolTestimonials from "../components/TestimonialCards";

export default function Home() {
  return (
  <main className="
  min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    {/* <h1 className="text-2xl text-center">
      code </h1> */}

      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUS/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
  </main>
 );
}






