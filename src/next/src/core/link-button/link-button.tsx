import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

export const LinkButton = ({ href, children }: LinkButtonProps) => (
  <Button colorScheme="primary">
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  </Button>
);
