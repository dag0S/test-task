import type { FC } from "react";
import type { Metadata } from "next";

import { CreateProduct } from "@/src/widgets/CreateProduct";

export const metadata: Metadata = {
  title: "Создание нового продукта",
};

const CreateProductPage: FC = () => {
  return <CreateProduct />;
};

export default CreateProductPage;
