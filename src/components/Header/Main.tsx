import victorySignIcon from "@/assets/Victory.svg";
import { Button } from "../Button";
import { BellIcon, SearchIcon } from "@/icons";

export default function Main() {
  return (
    <header className="flex justify-between px-8 pt-10">
      <div className="flex items-center">
        <img src={victorySignIcon} alt="victory sign" />
        <p className="text-lg font-semibold">Hey George!</p>
      </div>

      <div className="flex items-center">
        <Button className="px-2">
          <SearchIcon className="text-secondary" />
        </Button>
        <Button className="px-2">
          <BellIcon className="text-secondary" />
        </Button>
      </div>
    </header>
  );
}
