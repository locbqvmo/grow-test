import clsx from "clsx";
import dayjs from "dayjs";

import visaIcon from "@/assets/visa-icon.svg";
import { Button } from "@/components";

interface CardItemProps {
  bg: "primary" | "secondary";
  dueDate: string;
  cardNumber: string;
  amount: number;
}

export default function CardItem({
  bg,
  dueDate,
  cardNumber,
  amount
}: CardItemProps) {
  return (
    <div
      className={clsx(
        "border-black mx-2.5 mb-8 flex min-h-[185px] min-w-[298px] flex-col justify-between rounded-xl border-2 p-5",
        bg === "primary" ? "bg-primary" : "bg-secondary"
      )}
    >
      <div className="flex justify-between text-white">
        <img src={visaIcon} alt="visa icon" />

        <p className="flex items-center text-base font-bold">
          <span className="mr-2">* * * *</span>
          {cardNumber}
        </p>
      </div>

      <div className="flex justify-between text-white">
        <div>
          <p className="mb-1 text-xs font-medium">
            Due Date{" "}
            <span className="font-semibold">
              {dayjs(dueDate).format("DD MMM")}
            </span>
          </p>
          <p className="text-[32px] font-semibold">
            ${amount.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="mb-4 text-right text-[8px] font-bold">Early</p>
          <Button className="w-[60px] bg-white px-2.5 py-1 text-[10px] text-sm font-semibold text-secondary shadow-onboarding">
            PAY
          </Button>
        </div>
      </div>
    </div>
  );
}
