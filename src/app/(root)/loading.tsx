import { HashLoader, ScaleLoader } from "react-spinners";

export default function ScaleSpinner() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar bg-red">
      <HashLoader color="#80aae1" />
    </div>
  );
}
