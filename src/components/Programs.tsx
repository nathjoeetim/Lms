import React from "react";
import Image from "next/image";
type Props = {};

const Programs = (props: Props) => {
  return (
    <div className="mt-16 relative">
      {/* Background Image with Dark Overlay */}
      <Image
        src="/school_program.jpg"
        alt="Programs"
        width={1920}
        height={100}
        className="object-cover w-full h-full absolute inset-0 bg-natural-900 opacity-70"
      />
    </div>
  );
};

export default Programs;
