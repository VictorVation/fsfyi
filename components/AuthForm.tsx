"use client";

import { useSupabase } from "@/lib/SupabaseProvider";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Inter } from "next/font/google";

type AuthFormProps = {
  surface: "home" | "signup" | "login";
};

const inter = Inter({ subsets: ["latin"] });

export default function AuthForm({ surface }: AuthFormProps) {
  const { supabase } = useSupabase();
  const isSignup = surface === "signup";

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa,
        extend: false,

        className: {
          container: "flex flex-col gap-4",
          button:
            "rounded-lg bg-sky-500 px-10 py-2 text-sm font-medium text-white",
          label: "block text-sm font-medium text-gray-500 text-left",
          input:
            "mt-1 p-3 w-full rounded-md border border-gray-200 bg-white text-md text-gray-700",
        },
        variables: {
          default: {
            colors: {
              brand: "#0ea5e9", // sky-500
              brandAccent: "#0284c7", // sky-600
            },
            fonts: {
              bodyFontFamily: inter.style.fontFamily,
              buttonFontFamily: inter.style.fontFamily,
              inputFontFamily: inter.style.fontFamily,
              labelFontFamily: inter.style.fontFamily,
            },
          },
        },
      }}
      providers={[]}
      magicLink={true}
      view={surface === "signup" ? "magic_link" : "magic_link"}
      localization={{
        variables: {
          sign_in: {
            link_text: "",
          },
          magic_link: {
            link_text: "Already on the waitlist? Sign in using a magic link",
            button_label: isSignup
              ? "Join waitlist"
              : "Send magic link to login",
            loading_button_label: isSignup
              ? "Adding you to the waitlist ..."
              : "Sending magic link, check your email to sign in",
            confirmation_text: isSignup
              ? "Click the link in your email so you hear as soon as we launch!"
              : "Check your email for the magic link to sign in",
          },
        },
      }}
    />
  );
}
