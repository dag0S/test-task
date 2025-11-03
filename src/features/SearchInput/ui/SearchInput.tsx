"use client";

import { ChangeEvent, useEffect, type FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { X } from "lucide-react";

import { Button, cn, Input } from "@/src/shared/shadcn";
import { useProductsStore } from "@/src/entities/Product";

interface Props {
  className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { searchBy, setSearchBy } = useProductsStore();

  const currentSearchBy = searchParams?.get("searchBy") || "";

  useEffect(() => {
    setSearchBy(currentSearchBy);
  }, [currentSearchBy, setSearchBy]);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value) {
      params.set("searchBy", value);
    } else {
      params.delete("searchBy");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchBy(value);
    handleSearch(value);
  };

  const handleClear = () => {
    setSearchBy("");
    const params = new URLSearchParams(searchParams?.toString());
    params.delete("searchBy");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn("relative", className)}>
      <Input
        placeholder="Поиск..."
        value={searchBy || ""}
        onChange={handleSetSearch}
        className="pr-9"
      />
      {searchBy && (
        <Button
          onClick={handleClear}
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0"
        >
          <X />
        </Button>
      )}
    </div>
  );
};
