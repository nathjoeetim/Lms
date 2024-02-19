import Link from "next/link";

interface SubTitleProps {
  pageIdentifier: string;
  section: string;
  semester: string;
  link: string;
}
function SubTitleComponent({
  pageIdentifier,
  section,
  semester,
  link,
}: SubTitleProps) {
  return (
    <div className="flex w-full flex-row justify-between items-center p-2 bg-slate-200 box-border">
      <div className="flex flex-row items-center gap-1">
        {pageIdentifier === "Admin Dashboard" ? (
          ""
        ) : (
          <Link href={link}>
            <h5 className="text-[.7rem] font-semibold text-[#999]">
              Dashboard{" "}
            </h5>
          </Link>
        )}
        <h5 className="text-[.7rem] font-semibold text-[#999]">
          {" "}
          {pageIdentifier}
        </h5>
      </div>
      <div className="flex flex-col ">
        <div className="flex  flex-row items-center justify-start">
          <h5 className=" flex felx-row justify-center text-[.6rem] w-[120px] font-extralight text-[#999]">
            Academic Session
          </h5>
          <span className="border-l border-gray-500 flex felx-row justify-end w-[100px] text-[.6rem] font-extralight text-[#999]">
            {section}
          </span>
        </div>
        <div className="flex  flex-row items-center justify-start border-t border-gray-500">
          <h5 className="flex felx-row justify-center text-[.6rem] w-[120px] font-extralight text-[#999]">
            Current Semester
          </h5>
          <span className="flex felx-row justify-end text-[.6rem] w-[100px] font-extralight text-[#999] border-l border-gray-500">
            {semester}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubTitleComponent;
