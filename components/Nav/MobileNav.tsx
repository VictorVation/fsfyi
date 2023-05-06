"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";
import { NavItems } from "./NavItemsRenderer";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden md:hidden">
        <button
          className="rounded-lg bg-gray-100 p-2 text-gray-600 w-10 h-10"
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
      {/* flexbox breaker so menu renders on following line */}
      <div className="lg:hidden basis-full h-0 w-0" />
      <NavItems
        listClass={classnames(
          isMenuOpen ? "visible" : "hidden",
          "text-md font-bold w-full lg:hidden flex flex-col font-medium mt-4 rounded-lg border-gray-50 dark:bg-gray-800 dark:border-gray-700"
        )}
        itemClass={
          "block py-2 px-4 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
      />
    </>
  );
}
