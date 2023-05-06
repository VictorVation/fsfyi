"use client";

import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";

type NavItemType = {
  label: string;
  href: string;
  badge?: JSX.Element;
};

export const NavItemsData: NavItemType[] = [
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
export function NavItems({ itemClass, listClass }: NavItemsRendererProps) {
  const pathname = usePathname();
  return (
    <nav aria-label="Site Nav">
      <ul className={listClass}>
        {NavItemsData.map(({ label, href, badge }) => (
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
    </nav>
  );
}
