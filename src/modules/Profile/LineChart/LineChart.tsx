import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Filter } from "./components";
import { chartOptions, chartData } from "../Profile.constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const [currentFilterOption, setCurrentFilterOption] = useState<string>("1w");

  const data = {
    labels: chartData[currentFilterOption].labels,
    datasets: [
      {
        label: "Dataset 1",
        data: chartData[currentFilterOption].data,
        borderColor: "#345AFA",
        backgroundColor: "#345AFA"
      }
    ]
  };

  const handleChangeFilter = (option: string) => {
    setCurrentFilterOption(option);
  };

  return (
    <div className="mb-5">
      <Filter
        currentOption={currentFilterOption}
        onChange={handleChangeFilter}
      />
      <div className="relative h-[172px]">
        {currentFilterOption === "all" && (
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-secondary bg-opacity-5">
            <p className="text-sm font-bold text-secondary">COMING SOON</p>
          </div>
        )}

        <Line options={chartOptions as any} data={data} />
      </div>
    </div>
  );
}
