import Image from "next/image";
import type { FC } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/src/shared/ui";
import { IProductApi } from "@/src/entities/Product";
import { ProductInfo } from "./ProductInfo";
import { Button } from "@/src/shared/shadcn";
import { ROUTES } from "@/src/shared/constants";

interface Props {
  product: IProductApi;
}

export const ProductDetails: FC<Props> = ({ product }) => {
  return (
    <section className="pt-6">
      <Container>
        <Link href={ROUTES.products}>
          <Button variant="secondary">
            <ArrowLeft /> Ко всем товарам
          </Button>
        </Link>
        <div className="md:grid md:items-center md:grid-cols-2 md:gap-x-8">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg justify-self-center"
          />
          <ProductInfo product={product} />
        </div>
      </Container>
    </section>
  );
};
