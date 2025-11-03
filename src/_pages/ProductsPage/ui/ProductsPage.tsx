import { Suspense, type FC } from "react";
import type { Metadata } from "next";

import { Products } from "@/src/widgets/Products";

export const metadata: Metadata = {
  title: "Products",
};

const ProductsPage: FC = () => {
  return (
    <Suspense fallback={null}>
      <Products />
    </Suspense>
  );
};

export default ProductsPage;
