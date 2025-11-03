import type { FC } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/src/shared/shadcn";
import { ROUTES } from "@/src/shared/constants";

export const metadata: Metadata = {
  title: "404 | Страница не найдена",
};

const NotFoundPage: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 pt-28">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-xl font-medium">Страница не найдена</h2>
      <Link href={ROUTES.home}>
        <Button>На главную</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
