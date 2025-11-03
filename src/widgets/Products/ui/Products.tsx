import type { FC } from "react";

import { Container } from "@/src/shared/ui";
import { ProductList } from "./ProductList";
import { ProductsHead } from "./ProductsHead";

export const Products: FC = () => {
  return (
    <section className="pt-6">
      <Container>
        <ProductsHead className="mb-6" />
        <ProductList className="mb-6" />
      </Container>
    </section>
  );
};
