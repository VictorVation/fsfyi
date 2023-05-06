import Link from "next/link";

export default function SiteLogo() {
  return (
    <div className="flex lg:w-0 lg:flex-1">
      <Link href="/">
        <span className="sr-only">Logo</span>
        <h1 className="text-2xl font-semibold text-gray-700">
          flightschool.fyi ✈️
        </h1>
      </Link>
    </div>
  );
}
