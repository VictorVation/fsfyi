import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const revalidate = 0;

export default async function AccountPage() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const { data } = await supabase.auth.getSession();
  const user = data?.session?.user;

  if (user) {
    let { data, error, status } = await supabase
      .from("profiles")
      .select(`*`)
      .eq("id", user.id)
      .single();
    console.log(data);
    return data != null ? JSON.stringify(data) : "Not 1";
  }
  return "Not logged in!";
}
