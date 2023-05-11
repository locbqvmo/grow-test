import { navigatorItems } from "./Navigator.constants";
import NavigatorItem from "./NavigatorItem";
import "./Navigator.scss";
import clsx from "clsx";

interface NavigatorProps {
  position: "fixed" | "static";
}

const classes = {
  fixed: "fixed bottom-8 left-8 right-8",
  static: "m-8"
};

export default function Navigator({ position }: NavigatorProps) {
  return (
    <div
      className={clsx(
        "navigator flex justify-between rounded-2xl p-4",
        classes[position]
      )}
    >
      {navigatorItems.map((item) => (
        <NavigatorItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </div>
  );
}
