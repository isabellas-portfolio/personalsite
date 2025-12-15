import React from "react";

export function SketchStar(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2.5l2.3 4.7 5.2.7-3.8 3.6.9 5.1L12 14.7 7.4 16.6l.9-5.1-3.8-3.6 5.2-.7L12 2.5z" />
    </svg>
  );
}


