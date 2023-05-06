import MobileNav from "@/components/Nav/MobileNav";
import NavBar from "@/components/Nav/NavBar";
import { NavItems } from "@/components/Nav/NavItemsRenderer";
import SiteLogo from "@/components/Nav/SiteLogo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <NavBar>
        <SiteLogo />
        <NavItems
          itemClass={""}
          listClass={"hidden gap-8 text-sm font-medium md:flex"}
        />
        <MobileNav />
      </NavBar>
      <section
        className={`flex flex-col items-center justify-between lg:p-24 md:p-12 pt-8 px-8`}
      >
        {children}
      </section>
    </>
  );
}
