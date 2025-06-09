// src/components/icons/LotusIcon.tsx
import type { SVGProps } from 'react';

export function LotusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.24 10.45A5.02 5.02 0 0 1 12 8a5.02 5.02 0 0 1 3.76 2.45M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M20.9 10.45A5.02 5.02 0 0 0 17.14 8M3.1 10.45A5.02 5.02 0 0 1 6.86 8" />
      <path d="M12 22a9.98 9.98 0 0 0 8.69-5.1H3.31A9.98 9.98 0 0 0 12 22Z" />
      <path d="M15.76 14.9A5.02 5.02 0 0 1 12 17a5.02 5.02 0 0 1-3.76-2.1M19.07 16.9a5.02 5.02 0 0 0-1.31-1.33M4.93 16.9a5.02 5.02 0 0 1 1.31-1.33" />
      <path d="m12 2 1.09.91A10.01 10.01 0 0 1 17.14 8M12 2l-1.09.91A10.01 10.01 0 0 0 6.86 8" />
    </svg>
  );
}
