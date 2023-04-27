import Link from "next/link";

export default function Nav() {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Logo</span>
              <h1 className="text-2xl font-semibold text-gray-700">
                flightschool.fyi ✈️
              </h1>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <Link className="text-gray-500" href="/airports">
              Airports
            </Link>
            <Link className="text-gray-500" href="/flight-schools">
              Flight Schools
            </Link>
            <Link className="text-gray-500" href="posts">
              Articles
            </Link>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <Link
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Log in
            </Link>

            <Link
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Sign up
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
