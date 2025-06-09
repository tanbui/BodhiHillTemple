// src/components/icons/DharmaWheelIcon.tsx
import type { SVGProps } from 'react';

export function DharmaWheelIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="m4.22 4.22 1.76 1.76" />
      <path d="m18.02 18.02 1.76 1.76" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
      <path d="m4.22 19.78 1.76-1.76" />
      <path d="m18.02 5.98 1.76-1.76" />
    </svg>
  );
}
