import dayjs from "dayjs";

import ProgressBar from "./ProgressBar";

interface LoanItemProps {
  image: string;
  amountPerMonth: number;
  nextPeriod: string;
  name: string;
  progress: number;
  total: number;
}

export default function LoanItem({
  image,
  amountPerMonth,
  nextPeriod,
  name,
  progress,
  total
}: LoanItemProps) {
  return (
    <div className="main-background flex w-[241px] items-center justify-between rounded-xl p-3">
      <img className="mr-6" src={image} alt="loan item" />
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-secondary">
            ${amountPerMonth}/M
          </p>

          <div className="flex flex-col text-xs text-secondary">
            <span className="font-medium">NEXT</span>
            <span className="font-bold">
              {dayjs(nextPeriod).format("DD YYY")}
            </span>
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-xs">
            <p className="font-semibold">{name}</p>
            <p className="font-extrabold">
              <span className="text-primary">{progress}</span>/
              <span>{total}</span>
            </p>
          </div>

          <ProgressBar total={total} progress={progress} />
        </div>
      </div>
    </div>
  );
}
