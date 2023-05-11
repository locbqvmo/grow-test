import { Link } from "react-router-dom";

import { Button } from "@/components";
import { ArrowRightIcon } from "@/icons";
import paths from "@/router/router.paths";

export default function Onboarding() {
  return (
    <div className="relative min-h-screen bg-[url('/bg.png')] bg-right bg-no-repeat px-8 pt-20 leading-tight">
      <h1 className="text-onboarding font-bold uppercase text-secondary">
        One Pay Stop For All.
      </h1>

      <Link to={paths.PATH_HOME}>
        <Button className="absolute bottom-20 right-6 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-secondary bg-primary px-0 py-0 shadow-onboarding">
          <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
}
