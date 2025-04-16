"use client";

import { useState } from "react";
import Link from "next/link";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-black-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black-700 hover:bg-black-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link href="/experience">
              <a className="block px-4 py-2 text-sm text-black hover:bg-black-100">Experience</a>
            </Link>
            <Link href="/leadership">
              <a className="block px-4 py-2 text-sm text-black hover:bg-black-100">Leadership</a>
            </Link>
            <Link href="/aboutme">
              <a className="block px-4 py-2 text-sm text-black hover:bg-black-100">About Me</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
