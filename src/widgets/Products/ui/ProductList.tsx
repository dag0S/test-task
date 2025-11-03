"use client";

import { useEffect, useMemo, type FC } from "react";

import { ProductCard, useProductsStore } from "@/src/entities/Product";
import { DeleteProduct } from "@/src/features/DeleteProduct";
import { ToggleFavorite } from "@/src/features/ToggleFavorite";
import { cn } from "@/src/shared/shadcn";
import { useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

export const ProductList: FC<Props> = ({ className }) => {
  const searchParams = useSearchParams();
  const { filter, products, fetchProducts } = useProductsStore();

  const currentSearchBy = searchParams?.get("searchBy") || "";

  useEffect(() => {
    fetchProducts(currentSearchBy);
  }, [fetchProducts, currentSearchBy]);

  const filteredProducts = useMemo(() => {
    if (filter === "favorites") {
      return products.filter((product) => product.isLiked);
    }

    return products;
  }, [filter, products]);

  return (
    <div
      className={cn(
        "grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <ProductCard
            actionToggleFavorite={
              <ToggleFavorite
                isLiked={product.isLiked}
                productId={product.id}
              />
            }
            actionDeleteProduct={<DeleteProduct productId={product.id} />}
            product={product}
            key={product.id}
          />
        ))}
    </div>
  );
};
