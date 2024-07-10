import Footer from "@/components/Footer/Footer";
import GiveScholarship from "@/components/GiveScholarship/GiveScholarship";
import Hero from "@/components/Hero/Hero";
import JoinUs from "@/components/JoinUs/JoinUs";
import Mission from "@/components/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import Partnership from "@/components/Partnerships/Partnership";
import Projects from "@/components/Projects/Projects";
import Testimonial from "@/components/Testimonials/Testimonial";
import React from "react";

export default function Home() {
  return (
    <main className="poppins-regular">
      <div className="relative z-50 top-0 right-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="relative w-full h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-30"
            src="https://miracle.sirv.com/kachem-young-initiative/WhatsApp%20Video%202023-10-10%20at%206.51.34%20AM.mp4"
            autoPlay
            loop
            playsInline
          />
        </div>
        <div className="absolute top-0 w-full left-0">
        <Hero />
        </div>
        <Mission />
        <Projects />
        <GiveScholarship />
        <JoinUs />
        <Testimonial />
        <Partnership />
        <Footer />
        
      </div>
    </main>
  );
}
