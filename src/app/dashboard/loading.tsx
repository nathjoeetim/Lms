"use client"
import { HashLoader, ScaleLoader } from "react-spinners";

export default function ScaleSpinner() {
  return (
    <div className="flex flex-col gap-4 h-[50%] mt-2 overflow-y-scroll items-center justify-center w-full overflow-x-hidden custom-scrollbar ">
      <HashLoader color="#80aae1" />
    </div>
  );
}
