import { Button } from "@/components";
import dayjs from "dayjs";

interface TotalSpendingsProps {
  total: number;
  dueDate: string;
}

export default function TotalSpendings({
  total,
  dueDate
}: TotalSpendingsProps) {
  return (
    <div className="mb- mb-8 flex items-center justify-between rounded-xl bg-secondary p-5">
      <div>
        <p className="mb-1.5 text-[10px] font-semibold text-white">
          Total Spendings
        </p>
        <p className="text-2xl font-semibold text-white">
          ${total.toLocaleString()}
        </p>
      </div>

      <div>
        <p className="mb-1.5 text-[10px] text-white">
          <span className="mr-1 font-medium">Due Date</span>
          <span className="font-semibold">
            {dayjs(dueDate).format("DD MMM")}
          </span>
        </p>
        <Button className="bg-primary px-7 py-2 text-[10px] font-semibold uppercase text-white">
          Pay Early
        </Button>
      </div>
    </div>
  );
}
