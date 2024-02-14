import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [" Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

const expensesData = [30, 40, 35, 50, 49, 30, 70, 91, 85];
const revenueData = [0, 0, 55, 70, 69, 80, 90, 111, 145];

const series = [
  {
    name: "Expenses",
    data: expensesData,
    markers: {
      size: 8,
      colors: ["#FF4560"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 10,
      },
    },
  },
  {
    name: "Revenue",
    data: revenueData,
    markers: {
      size: 8,
      colors: ["#008FFB"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 10,
      },
    },
  },
];



function DashBoardCard() {
  return (
    <Card className="flex flex-col gap-6 w-[97%] mx-auto p-3">
      <span className="flex w-full flex-row items-center justify-center h-9  text-sm text-[1rem] font-semibold">
        Monthly Financial Summary | 2023 - 2024
      </span>
      <ApexChart
        type="line"
        options={options}
        series={series}
        height={200}
        width="100%"      />
    </Card>
  );
}

export default DashBoardCard;
