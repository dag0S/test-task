import type { IReview } from "../../Review";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  brand: string;
  reviews: IReview[];
  images: string[];
  thumbnail: string;
  isLiked?: boolean;
}

export type NewProductInput = Omit<
  IProduct,
  "id" | "rating" | "reviews" | "thumbnail" | "isLiked" | "images" | "thumbnail"
>;

export interface IProductResponse {
  limit: number;
  products: IProductApi[];
  skip: number;
  total: number;
}

export interface IProductApi {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta;
  images: string[];
  thumbnail: string;
}

export interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IDimensions {
  width: number;
  height: number;
  depth: number;
}
