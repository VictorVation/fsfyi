import AuthForm from "@/components/AuthForm";
import SupabaseProvider from "@/lib/SupabaseProvider";

export default function LoginPage() {
  return (
    <section className="flex flex-col text-center items-center max-w-lg">
      <aside>
        <h1 className="text-3xl sm:text-4xl">Sign In</h1>
        <p className="mt-4 text-gray-600">
          If you're already on the waitlist, you're set! If you want to manage
          your spot on the list, you can log in using a magic link:
        </p>
      </aside>
      <section className="mt-8">
        <SupabaseProvider>
          <AuthForm surface={"login"} />
        </SupabaseProvider>
      </section>
    </section>
  );
}
