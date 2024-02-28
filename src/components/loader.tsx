import { HashLoader, ScaleLoader } from "react-spinners";

export function HashSpinner() {
  return (
    <div className="flex flex-row items-center justify-center p-3 py-3 h-[50%] w-full">
      <HashLoader color="#80aae1" />
    </div>
  );
}

export function ScaleSpinner() {
  return (
    <div className="flex flex-row items-center justify-center p-3 py-3 w-full h-[50%]">
      <ScaleLoader color="#80aae1" />
    </div>
  );
}
