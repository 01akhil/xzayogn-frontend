import React, { useState, useEffect } from "react";
import fore_cleanup from "../assets/fore_cleanup.png";
import ContactUs from "../components/ContactUs";
import Marquee from "../components/Marquee";
import TakeTestButton from "../components/TakeTestButton";
import LogInButton from "../components/LogInButton";
import ExploreButton from "../components/ExploreButton";
import ChatBot from "../components/ChatBot";
import SearchForm from "../components/SearchForm";
import HeadingWithTypingEffect from "../components/HeadingWithTypingEffect";
const LandingPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <div className="absolute top-4 left-4 z-10 flex">
        <LogInButton />
      </div>
      <div className="absolute top-4 right-4 z-10 flex">
        <ExploreButton />
      </div>
      <div className="w-full min-h-[90vh] flex flex-col items-center justify-center text-white px-6 space-y-6">
        <HeadingWithTypingEffect
          text="Coonfusion to Clarity"
          className="text-3xl sm:text-5xl font-bold text-center max-w-xl"
        />
        <p className="text-base sm:text-xl text-center max-w-2xl">
          A place to suggest the best personalized roadmaps, careers, and
          resources to students.
        </p>
        <SearchForm />
        <TakeTestButton />
      </div>
      <Marquee />
      <ContactUs />
      <ChatBot />
    </div>
  );
};

export default LandingPage;
