import { Inter } from "next/font/google";
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import AirportCard from "@/components/AirportCard";
import Link from "next/link";

export default async function HomePage() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data: airports } = await supabase.from("airports").select("*");

  return (
    <main>
      <section>
        {/* <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"> */}
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Discover the freedom of aviation.
            </h2>

            <p className="mt-4 text-gray-600">
              Whether you're a seasoned pilot or just starting your journey in
              the skies, our platform offers a wealth of information and
              resources to help you soar to new heights.
            </p>

            <Link
              href="/posts"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Read Latest Articles
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {airports?.map((airport) => (
              <AirportCard airport={airport} />
            ))}
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}

// <main
// className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
// >
// {data?.map(({ name, faa, icao }) => (
//   <div
//     className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"
//     key={faa}
//   >
//     <div className="group rounded-lg border border-transparent px-5 py-4">
//       <h2 className={`mb-3 text-2xl font-semibold`}>
//         {faa} / {icao}
//       </h2>
//       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{name}</p>
//     </div>
//   </div>
// ))}
// </main>
