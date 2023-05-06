import AuthForm from "@/components/AuthForm";
import SupabaseProvider from "@/lib/SupabaseProvider";

export default function LoginPage() {
  return (
    <SupabaseProvider>
      <section className="flex flex-col text-center items-center max-w-lg">
        <aside>
          <h1 className="text-3xl sm:text-4xl">Landing soon!</h1>

          <p className="mt-4 text-gray-600">
            Join our waitlist today for exclusive access to our platform.
            Looking to take your passion for aviation to new heights? Whether
            you&apos;re a seasoned pilot or just starting out, FlightSchool.fyi
            is the perfect resource to help you achieve your aviation goals.
          </p>
        </aside>
        <section className="mt-8">
          <SupabaseProvider>
            <AuthForm surface={"signup"} />
          </SupabaseProvider>
        </section>
      </section>
    </SupabaseProvider>
  );
}
