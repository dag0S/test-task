"use client";

import { MouseEvent, useCallback, type FC } from "react";
import { Heart } from "lucide-react";

import { useProductsStore } from "@/src/entities/Product";
import { Button, cn } from "@/src/shared/shadcn";

interface Props {
  isLiked?: boolean;
  productId: number;
}

export const ToggleFavorite: FC<Props> = ({ isLiked, productId }) => {
  const { toggleLike } = useProductsStore();

  const handleToggleFavorite = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      toggleLike(productId);
    },
    [productId, toggleLike]
  );

  return (
    <Button variant="ghost" size="icon" onClick={handleToggleFavorite}>
      <Heart
        className={cn(
          "h-5 w-5 transition-colors",
          isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground"
        )}
      />
    </Button>
  );
};
