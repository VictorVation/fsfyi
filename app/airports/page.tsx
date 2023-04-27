import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import AirportCard from "@/components/AirportCard";

export default async function HomePage() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data: airports } = await supabase.from("airports").select("*");

  return (
    <main>
      <section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {airports?.map((airport) => (
            <AirportCard airport={airport} key={airport.id} />
          ))}
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
