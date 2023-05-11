import { HomeIcon, ProfileIcon, SearchIcon, WalletIcon } from "@/icons";
import paths from "@/router/router.paths";

export const navigatorItems = [
  {
    name: "Home",
    path: paths.PATH_HOME,
    icon: <HomeIcon />
  },
  {
    name: "Search",
    path: "/search",
    icon: <SearchIcon />
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <WalletIcon />
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <ProfileIcon />
  }
];
