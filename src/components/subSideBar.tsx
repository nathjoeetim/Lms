import { GoHome } from "react-icons/go";
import { FaLaptopHouse } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import AdmissionSubComponent from "./sideSubComponent/admissionSubComponent";
import PeopleSubComponent from "./sideSubComponent/peopleSubSection";
import AcademicsSubContent from "./sideSubComponent/academicsSubContent";
import ResultSubComponent from "./sideSubComponent/resultSubComponent";
import FinanceSubComponent from "./sideSubComponent/financeSubComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubSideBarProps {
  onSelectedIndex: number;
}

type InnerContent = {
  title: string;
};

interface ComponentProps {
  pathname: string;
}
type SubContent = {
  icon: React.ComponentType<{ size?: number | string }>;
  triggerText: string;
  content: InnerContent[];
};

const SubSideBarComponent: React.FC<SubSideBarProps> = ({
  onSelectedIndex,
}) => {
  return (
    <div className="custom-scrollbar w-full overflow-x-hidden ">
      {onSelectedIndex == 0 ? (
        <DashBoardSubComponent />
      ) : onSelectedIndex == 1 ? (
        <AdmissionSubComponent />
      ) : onSelectedIndex == 2 ? (
        <PeopleSubComponent />
      ) : onSelectedIndex == 3 ? (
        <AcademicsSubContent />
      ) : onSelectedIndex === 4 ? (
        <LmsSubComponent />
      ) : onSelectedIndex === 5 ? (
        <ResultSubComponent />
      ) : onSelectedIndex === 6 ? (
        <FinanceSubComponent />
      ) : (
        <p>Hello world</p>
      )}
    </div>
  );
};

export default SubSideBarComponent;

function DashBoardSubComponent() {
  const pathname = usePathname();
  const isActive = pathname === "/najncankqiu0933u988687?9u8&";

  return (
    <Link href="/dashboard">
      <div
        className={`flex flex-row items-center justify-start h-14 gap-2 ${
          isActive ? "bg-[#F0F2F5]" : "bg-transparent" // Replace with a specific shade or color
        } p-2 text-sm font-sans cursor-pointer text-[#33353F]`}
      >
        <GoHome size={15} />
        <h2 className="text-slate-500 font-semibold">Dashboard</h2>
      </div>
    </Link>
  );
}

function LmsSubComponent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start h-14 gap-2 hover:bg-[#F0F2F5] p-2 text-sm font-sans cursor-pointer  text-[#33353F]">
        <FaLaptopHouse size={15} />
        <Link href="#" className="text-slate-500 font-semibold">
          Virtual Classroom{" "}
        </Link>
      </div>
      <div className="flex flex-row items-center justify-start h-14 gap-2 hover:bg-[#F0F2F5] p-2 text-sm font-sans cursor-pointer  text-[#33353F]">
        <FaBookAtlas size={15} />
        <div className="text-slate-500 font-semibold">Resourse Library</div>
      </div>
    </div>
  );
}
