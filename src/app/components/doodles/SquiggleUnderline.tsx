import React from "react";

export function SquiggleUnderline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={60}
      height={10}
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 6c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


