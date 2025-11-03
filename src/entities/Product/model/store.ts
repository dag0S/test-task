import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

import type {
  IProduct,
  IProductApi,
  IProductResponse,
  NewProductInput,
} from "../types/product";

interface State {
  products: IProduct[];
  favorites: number[];
  filter: "all" | "favorites";
  searchBy: string;
  fetchProducts: (query?: string) => Promise<void>;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: NewProductInput) => void;
  setFilter: (filter: "all" | "favorites") => void;
  setSearchBy: (value: string) => void;
}

export const useProductsStore = create<State>((set) => ({
  products: [],
  favorites: [],
  filter: "all",
  searchBy: "",
  fetchProducts: async (query?: string) => {
    try {
      const url = query
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        : `https://dummyjson.com/products`;

      const { data } = await axios<IProductResponse>(url);
      const products = data.products.map(
        (product: IProductApi): IProduct => ({
          id: product.id,
          title: product.title,
          description: product.description,
          images: product.images,
          thumbnail: product.thumbnail,
          price: product.price,
          category: product.category,
          reviews: product.reviews,
          brand: product.brand,
          rating: product.rating,
          isLiked: false,
        })
      );
      set((state) => ({
        products: [
          ...state.products.filter((product) => product.id > 10000),
          ...products,
        ],
      }));
    } catch (err) {
      toast.error("Ошибка при загрузке продуктов");
      console.error("Ошибка при загрузке продуктов:", err);
    }
  },
  toggleLike: (id) => {
    set((state) => {
      const updated = state.products.map((product) =>
        product.id === id ? { ...product, isLiked: !product.isLiked } : product
      );
      const isFavorite = state.favorites.includes(id);
      const favorites = isFavorite
        ? state.favorites.filter((favoriteId) => favoriteId !== id)
        : [...state.favorites, id];

      return { products: updated, favorites };
    });
  },
  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
      favorites: state.favorites.filter((favoriteId) => favoriteId !== id),
    }));
    toast.success("Продукт удалён");
  },
  addProduct: (product) => {
    set((state) => ({
      products: [
        {
          ...product,
          id: Date.now(),
          images: ["/no-image.png"],
          rating: 0,
          reviews: [],
          thumbnail: "/no-image.png",
          isLiked: false,
        },
        ...state.products,
      ],
    }));
    toast.success(`Продукт "${product.title}" добавлен`);
  },
  setFilter: (filter) => set({ filter }),
  setSearchBy: (value) => set({ searchBy: value }),
}));
