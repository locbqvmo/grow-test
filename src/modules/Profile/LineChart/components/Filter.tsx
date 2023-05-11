import clsx from "clsx";

import { Button } from "@/components";
import { filterOptionList } from "../../Profile.constants";

interface FilterProps {
  currentOption: string;
  onChange: (option: string) => void;
}

export default function Filter({ currentOption, onChange }: FilterProps) {
  return (
    <div className="main-background mb-8 flex justify-between rounded-lg px-4 py-3">
      {filterOptionList.map((option) => (
        <Button
          key={option.value}
          className={clsx(
            "h-8 rounded-lg py-0 text-xs",
            currentOption === option.value
              ? "bg-secondary font-bold text-white"
              : "bg-transparent text-secondary"
          )}
          onClick={() => {
            onChange(option.value);
          }}
        >
          {option.title}
        </Button>
      ))}
    </div>
  );
}
