import loadable from "@loadable/component";

export const HomePage = loadable(async () => await import("./home-page"));
export const OnboardingPage = loadable(
  async () => await import("./onboarding-page")
);
export const ProfilePage = loadable(async () => await import("./profile-page"));

// NOT FOUND PAGE
export const NotFoundPage = loadable(
  async () => await import("./not-found-page")
);
