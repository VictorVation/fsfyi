import { NavItems } from "./NavItemsRenderer";
import MobileNav from "./MobileNav";
import Identity from "./Identity";
import SiteLogo from "./SiteLogo";

type NavBarProps = {
  children: React.ReactNode;
};
export default async function NavBar({ children }: NavBarProps) {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-x-4 lg:gap-10">
          {children}
        </div>
      </div>
    </header>
  );
}
