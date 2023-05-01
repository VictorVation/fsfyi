"use client";

import Link from "next/link";
import classnames from "classnames";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

type NavItemType = {
  label: string;
  href: string;
  badge?: JSX.Element;
};

const NavItems: NavItemType[] = [
  {
    label: "Articles",
    href: "/articles",
    badge: (
      <span className="whitespace-nowrap rounded-full bg-purple-100 ml-1 px-2.5 py-0.5 text-sm text-purple-700">
        New!
      </span>
    ),
  },
  {
    label: "Flight School Reviews",
    href: "/flight-schools",
  },
  {
    label: "Airports",
    href: "/airports",
  },
];

type NavItemsRendererProps = {
  listClass: string;
  itemClass: string;
};
function NavItemsRenderer({ itemClass, listClass }: NavItemsRendererProps) {
  const pathname = usePathname();

  return (
    <ul className={listClass}>
      {NavItems.map(({ label, href, badge }) => (
        <Link
          className={classnames(
            pathname === href
              ? "text-sky-500"
              : "hover:underline text-gray-500 hover:text-gray-800",
            itemClass
          )}
          href={href}
          key={label}
        >
          {label} {badge}
        </Link>
      ))}
    </ul>
  );
}

export default function NavPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <nav aria-label="Site Nav">
            <NavItemsRenderer
              itemClass={""}
              listClass={"hidden gap-8 text-sm font-medium md:flex"}
            />
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-1 sm:flex">
            <Link
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Log in
            </Link>

            <Link
              className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Sign up
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
              onClick={() => setIsMenuOpen((isOpen: boolean) => !isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        <div className="w-full md:hidden md:w-auto">
          <nav
            aria-label="Site Nav"
            className={classnames(
              isMenuOpen ? "visible" : "hidden",
              "gap-8 text-sm font-medium md:flex"
            )}
          >
            <NavItemsRenderer
              listClass={
                "flex flex-col font-medium mt-4 rounded-lg border-gray-50 dark:bg-gray-800 dark:border-gray-700"
              }
              itemClass={
                "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
