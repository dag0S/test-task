import type { FC } from "react";

import type { IProductApi } from "@/src/entities/Product";

interface Props {
  product: IProductApi;
}

export const ProductInfo: FC<Props> = ({ product }) => {
  return (
    <div className="mt-10 space-y-5 sm:mt-16 lg:mt-0">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="text-2xl">${product.price}</div>
      <hr className="my-4" />
      <p className="text-muted-foreground">{product.description}</p>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Бренд: </h3>
        {product.brand}
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Категория: </h3>
        {product.category}
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold">Средний рейтинг: </h3>
        <div className="text-sm">⭐ {product.rating.toFixed(1)}</div>
      </div>
    </div>
  );
};
