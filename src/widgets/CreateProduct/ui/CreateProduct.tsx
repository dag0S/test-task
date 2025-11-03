import type { FC } from "react";

import { Container } from "@/src/shared/ui";
import { CreateProductForm } from "./CreateProductForm";

export const CreateProduct: FC = () => {
  return (
    <section className="pt-6">
      <Container className="max-w-4xl">
        <h1 className="text-2xl font-medium mb-6">Создать продукт</h1>
        <CreateProductForm />
      </Container>
    </section>
  );
};
