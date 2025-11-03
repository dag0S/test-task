import type { FC } from "react";

import { SearchInput } from "@/src/features/SearchInput";
import { cn } from "@/src/shared/shadcn";
import { Filters } from "@/src/features/Filters";

interface Props {
  className?: string;
}

export const ProductsHead: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <SearchInput />
      <Filters />
    </div>
  );
};
