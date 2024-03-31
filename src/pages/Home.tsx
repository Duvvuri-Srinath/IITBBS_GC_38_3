// "use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import logo from "../assets/IITBBS_Logo.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-center">
        <Link to="/chat">
          <div className="mb-4">
            <img src={logo} alt="IIT BBS Logo" className=" z-10 w-20 sm:w-32 md:w-48 lg:w-64 mx-auto" />
          </div>
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            IIT BBS GPT
          </h1>
        </Link>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Discover everything you need to know about our esteemed institution, IIT Bhubaneswar, right here. From comprehensive academic programs to cutting-edge research initiatives, we're dedicated to fostering innovation and excellence in education. Explore our website to uncover a wealth of information about our faculty, facilities, and the vibrant campus life awaiting you at IIT Bhubaneswar. Join us on our journey of learning, discovery, and transformation. Welcome to IIT Bhubaneswar, where the future begins.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-200"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}