import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

type Props = {};

const WelcomeDetails = (props: Props) => {
  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0">
      <div className="w-full space-y-3 md:mr-8">
        <h3 className="text-3xl font-bold">Welcome to our school</h3>
        <p className="text-sm text-wrap">
          <p className="text-sm text-wrap">
            Welcome to [School Name], where every child&apos;s journey to
            excellence begins! Nestled in the heart of our vibrant community,
            our school is more than just a place of learning; it&apos;s a home
            away from home, where students discover their passions, cultivate
            their talents, and forge lifelong friendships. At [School Name], we
            believe in nurturing not only the minds but also the hearts of our
            students. Our dedicated educators are committed to fostering a
            supportive and inclusive environment where every individual feels
            valued, respected, and empowered to reach their full potential.
          </p>
        </p>

        <div className="mt-8" />

        <h3 className="text-2xl font-bold">Vison</h3>
        <p className="text-sm text-wrap">
          Our vision at [School Name] is to inspire a community of lifelong
          learners who embrace diversity, pursue excellence, and make a positive
          impact on the world.
        </p>

        <div className="mt-8" />

        <h3 className="text-2xl font-bold">Mission</h3>
        <p className="text-sm text-wrap">
          At [School Name], our mission is to provide a dynamic learning
          environment that fosters intellectual curiosity, critical thinking,
          and compassionate leadership. We empower students to achieve academic
          excellence, cultivate their unique talents, and become responsible
          global citizens committed to creating a better future for all.
        </p>
      </div>

      <div className="w-80">
        <h3 className="text-2xl mb-4">Featured Links</h3>

        <ul className="space-y-4 list-none cursor-pointer">
          <li className="flex items-center space-x-3 border-b border-gray-300 text-red-500 pb-2 animate-pulse">
            <PlayCircle className="w-4 h-4" />
            <Link href="#" className="text-sm">
              Undergraduate Portal
            </Link>
          </li>
          <li className="flex items-center space-x-3 border-b border-gray-300 text-blue-500 pb-2 animate-pulse">
            <PlayCircle className="w-4 h-4" />
            <p className="text-sm">E- Transcript</p>
          </li>
          <li className="flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2">
            <PlayCircle className="w-4 h-4" />
            <p className="text-sm">Result Verification</p>
          </li>
          <Link
            href="/login"
            className="flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2"
          >
            <PlayCircle className="w-4 h-4" />
            <p className="text-sm">Staff Portal</p>
          </Link>
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default WelcomeDetails;
