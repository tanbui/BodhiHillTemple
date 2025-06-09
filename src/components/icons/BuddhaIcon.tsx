// src/components/icons/BuddhaIcon.tsx
import type { SVGProps } from 'react';

export function BuddhaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M5 15.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V14H5v1.5z" />
      <path d="M8.5 11.5C7.67 11.5 7 12.17 7 13s.67 1.5 1.5 1.5S10 13.83 10 13s-.67-1.5-1.5-1.5zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    </svg>
  );
}
