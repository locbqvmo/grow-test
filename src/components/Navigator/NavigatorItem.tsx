import { NavLink } from "react-router-dom";

interface NavigatorItemProps {
  name: string;
  path: string;
  icon: JSX.Element;
}

export default function NavigatorItem({
  name,
  path,
  icon
}: NavigatorItemProps) {
  return (
    <NavLink
      className="flex flex-col items-center justify-center text-xs font-medium text-secondary"
      to={path}
    >
      {icon}
      <span className="mt-1">{name}</span>
    </NavLink>
  );
}
