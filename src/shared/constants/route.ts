export const ROUTES = {
  home: "/",
  products: "/products",
  product: (id: number) => `/products/${id}`,
  create_product: "/create-product",
  not_found: "/not-found",
} as const;
