import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import Link from "next/link";

export default async function Identity() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session ? (
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
  );
}
