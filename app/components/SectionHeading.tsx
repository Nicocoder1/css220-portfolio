import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
      {children}
    </h2>
  );
}
