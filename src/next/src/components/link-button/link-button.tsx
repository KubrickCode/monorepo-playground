import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

export const LinkButton = ({ href, children }: LinkButtonProps) => (
  <button>
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  </button>
);
