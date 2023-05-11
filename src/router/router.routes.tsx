import paths from "./router.paths";
import { OnboardingPage, HomePage, ProfilePage } from "@/pages";

export const routes = [
  {
    title: "Onboarding",
    path: paths.PATH_ONBOARDING,
    element: <OnboardingPage />
  },
  {
    title: "Home",
    path: paths.PATH_HOME,
    element: <HomePage />
  },
  {
    title: "Profile",
    path: paths.PATH_PROFILE,
    element: <ProfilePage />
  }
];
