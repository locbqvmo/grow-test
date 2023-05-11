import { useEffect } from "react";

import { IS_FIRST_TIME } from "@/constants/config";
import { Onboarding } from "@/modules/Onboarding";

export default function OnboardingPage() {
  useEffect(() => {
    localStorage.setItem(IS_FIRST_TIME, "false");
  }, []);

  return <Onboarding />;
}
