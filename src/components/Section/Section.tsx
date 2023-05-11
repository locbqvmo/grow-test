import clsx from "clsx";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  seeAll?: boolean;
  url?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
}

export default function Section({
  title,
  seeAll,
  url,
  children,
  className,
  headerClassName
}: SectionProps) {
  return (
    <div className={className}>
      <div
        className={clsx(
          "mb-4 flex items-center justify-between text-secondary",
          headerClassName
        )}
      >
        <p className="text-base font-bold">{title}</p>

        {seeAll === true && seeAll !== undefined && url !== undefined && (
          <Link className="text-base font-bold" to={url}>
            See all
          </Link>
        )}
      </div>

      {children}
    </div>
  );
}
