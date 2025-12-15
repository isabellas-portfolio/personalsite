import React from "react";

export function NotebookSketch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 3h16v18H4V3z" />
      <path d="M4 3h16" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h8" />
    </svg>
  );
}


