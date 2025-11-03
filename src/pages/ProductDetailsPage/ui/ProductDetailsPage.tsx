import type { FC } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import axios from "axios";

import type { IProductResponse } from "@/src/entities/Product/types/product";
import { ProductDetails } from "@/src/widgets/ProductDetails";

export const generateStaticParams = async () => {
  const { data } = await axios.get<IProductResponse>(
    "https://dummyjson.com/products"
  );

  const paths = data.products.map((product) => ({
    params: { id: product.id },
  }));

  return paths;
};

const getProducts = async (id: string) => {
  try {
    const { data: product } = await axios.get(
      `https://dummyjson.com/products/${id}`
    );

    return { product };
  } catch {
    return notFound();
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const { product } = await getProducts(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.images[0],
          width: 1000,
          height: 1000,
          alt: product.title,
        },
      ],
    },
  };
};

const ProductDetailsPage: FC<{ params: Promise<{ id: string }> }> = async ({
  params,
}) => {
  const { id } = await params;
  const { product } = await getProducts(id);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
