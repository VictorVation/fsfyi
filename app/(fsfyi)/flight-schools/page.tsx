import AuthForm from "@/components/AuthForm";
import SupabaseProvider from "@/lib/SupabaseProvider";

export default function FlightSchoolComingSoonPage() {
  return (
    <section className="flex flex-col text-center items-center max-w-lg">
      <aside>
        <h1 className="text-3xl sm:text-4xl">
          Coming soon: Real reviews from flight students
        </h1>

        <p className="mt-8 text-gray-600">
          We're getting ready for takeoff on our flight review platform, and it
          will be ready soon! If you want to keep up to date and know as soon as
          we're launching, sign up for the waitlist below!
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Are you a current or former flight student and want to leave a review?
          Jump the line by emailing us at{" "}
          <a
            className="text-sky-500 hover:underline"
            href="reviews@flightschool.fyi"
          >
            reviews@flightschool.fyi
          </a>
          .
        </p>
      </aside>
      <section className="mt-8">
        <SupabaseProvider>
          <AuthForm surface={"signup"} />
        </SupabaseProvider>
      </section>
    </section>
  );
}
// import { headers, cookies } from "next/headers";
// import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "@/lib/database.types";

export const metadata = {
  title: "Flight School Reviews | FlightSchool.fyi",
  description:
    "Your comprehensive guide for learning to fly, from ground school to the flight deck.",
};

// export default async function FlightSchoolPage() {
//   const supabase = createServerComponentSupabaseClient<Database>({
//     headers,
//     cookies,
//   });

//   const { data: schools } = await supabase
//     .from("schools")
//     .select("name, address, airport(faa, icao)");
//   console.log(schools);
//   return (
//     <main>
//       <section>
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
//           {schools?.map(
//             ({ name, address, airport }) =>
//               airport != null && (
//                 <div
//                   className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
//                   key={name}
//                 >
//                   <span className="inline-block rounded-lg bg-gray-50 p-3">
//                     JFK / KJFK
//                   </span>

//                   <h2 className="mt-2 font-bold">{name}</h2>

//                   <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
//                     {address}
//                   </p>
//                 </div>
//               )
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

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
