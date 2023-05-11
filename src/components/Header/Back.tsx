import { useNavigate } from "react-router-dom";

import { ChevronRightIcon } from "@/icons";

export default function Back() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between px-8 pt-10">
      <ChevronRightIcon
        onClick={() => {
          navigate(-1);
        }}
      />
    </header>
  );
}
