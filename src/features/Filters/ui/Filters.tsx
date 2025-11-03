"use client";

import { useCallback, useEffect, type FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heart, List } from "lucide-react";

import { Button } from "@/src/shared/shadcn";
import { useProductsStore } from "@/src/entities/Product";

export const Filters: FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { filter, setFilter } = useProductsStore();

  useEffect(() => {
    const current = searchParams?.get("filter");

    if (current === "favorites" || current === "all") {
      setFilter(current);
    }
  }, [searchParams, setFilter]);

  const handleFilterChange = useCallback(
    (value: "all" | "favorites") => {
      setFilter(value);

      const params = new URLSearchParams(searchParams?.toString());

      params.set("filter", value);
      router.replace(`/products?${params.toString()}`);
    },
    [router, searchParams, setFilter]
  );

  return (
    <div className="flex gap-4 items-center">
      <Button
        variant={filter === "all" ? "default" : "outline"}
        onClick={() => handleFilterChange("all")}
      >
        <List />
        Все
      </Button>
      <Button
        variant={filter === "favorites" ? "default" : "outline"}
        onClick={() => handleFilterChange("favorites")}
      >
        <Heart /> Избранные
      </Button>
    </div>
  );
};
