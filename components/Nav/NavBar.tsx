import Link from "next/link";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NavItemsRenderer } from "./NavItemsRenderer";
import MobileNav from "./MobileNav";

export default async function NavBar({}) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-x-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Logo</span>
              <h1 className="text-2xl font-semibold text-gray-700">
                flightschool.fyi ✈️
              </h1>
            </Link>
          </div>

          <nav aria-label="Site Nav">
            <NavItemsRenderer
              itemClass={""}
              listClass={"hidden gap-8 text-sm font-medium md:flex"}
            />
          </nav>

          {session ? (
            " Logged In! "
          ) : (
            <div className="hidden flex-1 items-center justify-end gap-1 sm:flex">
              <Link
                className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                href="/login"
              >
                Log in
              </Link>

              <Link
                className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-medium text-white"
                href="signup"
              >
                Sign up
              </Link>
            </div>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
