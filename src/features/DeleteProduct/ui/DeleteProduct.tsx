"use client";

import { MouseEvent, useCallback, type FC } from "react";
import { Trash } from "lucide-react";

import { Button } from "@/src/shared/shadcn";
import { useProductsStore } from "@/src/entities/Product";

interface Props {
  productId: number;
}

export const DeleteProduct: FC<Props> = ({ productId }) => {
  const { deleteProduct } = useProductsStore();

  const handleDeleteProduct = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      deleteProduct(productId);
    },
    [productId, deleteProduct]
  );

  return (
    <Button variant="ghost" size="icon" onClick={handleDeleteProduct}>
      <Trash className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
    </Button>
  );
};
