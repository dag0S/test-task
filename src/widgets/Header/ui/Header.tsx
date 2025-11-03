import type { FC } from "react";
import Link from "next/link";

import { ROUTES } from "@/src/shared/constants";
import { Navigation } from "./Navigation";
import { Container } from "@/src/shared/ui";
import { MobileNavigation } from "./MobileNavigation";

export const Header: FC = () => {
  return (
    <header className="border">
      <Container className="flex justify-between items-center gap-4 h-15">
        <Link href={ROUTES.home} className="font-bold text-xl hover:opacity-80">
          Alfa Bank Test Task
        </Link>
        <Navigation className="hidden md:flex" />
        <MobileNavigation className="flex md:hidden" />
      </Container>
    </header>
  );
};
