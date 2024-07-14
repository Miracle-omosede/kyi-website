"use client"
import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer/Footer";
import GiveScholarship from "@/components/GiveScholarship/GiveScholarship";
import Hero from "@/components/Hero/Hero";
import JoinUs from "@/components/JoinUs/JoinUs";
import Mission from "@/components/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import Partnership from "@/components/Partnerships/Partnership";
import Projects from "@/components/Projects/Projects";
import Testimonial from "@/components/Testimonials/Testimonial";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error("Video element not found");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log("Video is in view, playing...");
          video.play();
        } else {
          // console.log("Video is out of view, pausing...");
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <main className="poppins-regular">
      <div className="relative z-50 top-0 right-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="relative w-full h-screen">
          <video
            ref={videoRef}
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
