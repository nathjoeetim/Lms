import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { useState } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const optionsDepartment = {
  chart: {
    id: "Population by Department",
  },
  xaxis: {
    categories: [
      " Business",
      "Law",
      "Clinical Sci",
      "Agric",
      "Edu",
      "Math",
      "Marketing",
      "Music",
      "Others",
    ],
  },
};

const optionsFaculty = {
  chart: {
    id: "Population by Faculty",
  },
  xaxis: {
    categories: [
      "Bus Mgt",
      "Law",
      "Clinical Sci",
      "Art",
      "Social Science",
      "Education",
    ],
  },
};

const ActiveDepartment = [30, 40, 35, 50, 49, 30, 70, 91, 85];
const DeactiveDepartment = [0, 0, 0, 0, 0, 0, 0, 1, 0];

const ActiveFaculty = [100, 190, 185, 200, 199, 100];
const DeactiveFaculty = [0, 0, 0, 0, 0, 0];

const seriesFaculty = [
  {
    name: "Active ",
    data: ActiveFaculty,
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
    name: "Deactive ",
    data: DeactiveFaculty,
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

const seriesDepartment = [
  {
    name: "Active ",
    data: ActiveDepartment,
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
    name: "Deactive ",
    data: DeactiveDepartment,
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

type PopulationCardContentAliases = {
  header: string;
  options: object;
  series: Array<object> | any;
};

function PopulationDistributionComponent() {
  const [populationData, _setPoplationData] = useState<
    PopulationCardContentAliases[]
  >([
    {
      header: "Population Distribution By Department in Current Section",
      options: optionsDepartment,
      series: seriesDepartment,
    },
		{
      header: "Population Distribution By Faculty in Current Section",
      options: optionsFaculty,
      series: seriesFaculty,
    },
  ]);
  return (
    <div className="flex flex-roll w-full p-4 justify-between gap-5">
      {populationData.map((element, index) => {
        return (
          <Card key={index} className="flex flex-col gap-6 w-[90%] mx-auto p-3">
            <span className="flex w-full flex-row items-center justify-start h-9  text-sm text-[1rem] font-semibold">
             {element.header}
            </span>
            <ApexChart
              type="bar"
              options={element.options}
              series={element.series}
              height={200}
              width="100%"
            />
          </Card>
        );
      })}
    </div>
  );
}

export default PopulationDistributionComponent;
