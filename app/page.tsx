import { Inter } from "next/font/google";
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import AirportCard from "@/components/AirportCard";
import Link from "next/link";

export const metadata = {
  title: "FlightSchool.fyi: From ground school to the flight deck",
  description:
    "Your comprehensive guide for learning to fly, from ground school to the flight deck.",
};

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
              Whether you&apos;re a seasoned pilot or just starting your journey
              in the skies, our platform offers a wealth of information and
              resources to help you soar to new heights.
            </p>

            <Link
              className="mt-8 group relative inline-flex items-center overflow-hidden rounded bg-sky-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-sky-400"
              href="/articles"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Read Latest Articles
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {airports?.map((airport) => (
              <AirportCard airport={airport} key={airport.id} />
            ))}
          </div>
        </div>
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
