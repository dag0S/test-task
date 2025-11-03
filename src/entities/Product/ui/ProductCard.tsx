"use client";

import type { FC, ReactNode } from "react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/shadcn";
import type { IProduct } from "../types/product";
import { ROUTES } from "@/src/shared/constants";

interface Props {
  product: IProduct;
  actionToggleFavorite: ReactNode;
  actionDeleteProduct: ReactNode;
}

export const ProductCard: FC<Props> = ({
  product,
  actionToggleFavorite,
  actionDeleteProduct,
}) => {
  const router = useRouter();

  return (
    <Card
      className="relative gap-2 md:gap-6 pt-0 group cursor-pointer transition hover:shadow-lg"
      onClick={() => router.push(ROUTES.product(product.id))}
    >
      <CardHeader className="p-0">
        <div className="relative w-full overflow-hidden rounded-t-xl">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {product.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-4">
        <span className="text-base font-medium">${product.price}</span>
        <div className="flex items-center gap-2 z-10">
          {actionToggleFavorite}
          {actionDeleteProduct}
        </div>
      </CardFooter>
    </Card>
  );
};
