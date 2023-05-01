import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import AirportCard from "@/components/AirportCard";

export const metadata = {
  title: "Airports | FlightSchool.fyi",
};

export default async function AirportsPage() {
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
      </section>
    </main>
  );
}
