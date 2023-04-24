import { Inter } from "next/font/google";
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

const inter = Inter({ subsets: ["latin"] });

export default async function HomePage() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data } = await supabase.from("airports").select("*");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.map(({ name, faa, icao }) => (
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {faa} / {icao}
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{name}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
