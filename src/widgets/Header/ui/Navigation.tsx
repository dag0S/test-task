import type { FC } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { ROUTES } from "@/src/shared/constants";
import { Button, cn } from "@/src/shared/shadcn";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const Navigation: FC<Props> = ({ className, onClick }) => {
  return (
    <nav>
      <ul className={cn("flex items-center gap-4", className)}>
        <li>
          <Link href={ROUTES.home} onClick={onClick}>
            <Button variant="ghost">Главная </Button>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.products} onClick={onClick}>
            <Button variant="ghost">Продукты </Button>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.create_product} onClick={onClick}>
            <Button variant="ghost">
              Создать продукт
              <Plus />
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
