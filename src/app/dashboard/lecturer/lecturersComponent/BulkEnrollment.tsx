import { Button } from "@/components/ui/button";
import { BiCloudDownload } from "react-icons/bi";

function BulkEnrollment() {
  return (
    <div className="flex flex-col gap-2 w-full h-[300px]">
      <div className="flex flex-row items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 h-[100px] box-border">
        <h5 className="font-normal text-xl">Download Spreadsheet Template</h5>
      </div>
      <div className="flex flex-col items-center justify-start p-3 w-full gap-5 h-[100%]">
        <span className="font-normal text-sm text-slate-700">
          An alternative to registering one lecturer at a time, this enables you
          prepare the list of lecturer to be enrolled into a class (in an Excel
          Spreadsheet) and import the list into the class.
        </span>
        <Button className="flex flex-row items-center justify-center gap-3">
          Download Excel Template <BiCloudDownload size={18} />
        </Button>
      </div>
    </div>
  );
}

export default BulkEnrollment;
