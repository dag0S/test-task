"use client";

import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/src/shared/shadcn";
import { useProductsStore } from "@/src/entities/Product";

export const createProductSchema = z.object({
  title: z.string().min(3, "Минимум 3 символа"),
  description: z.string().min(10, "Минимум 10 символов"),
  price: z.coerce.number().gte(0, "Цена должна быть больше 0"),
  category: z.string().min(1, "Укажите категорию"),
  brand: z.string().min(1, "Укажите бренд"),
});

export type CreateProductForm = z.infer<typeof createProductSchema>;

export const CreateProductForm: FC = () => {
  const { addProduct } = useProductsStore();
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category: "",
      brand: "",
    },
  });

  const onSubmit = async (data: CreateProductForm) => {
    try {
      const price = Number(data.price);

      addProduct({
        title: data.title,
        description: data.description,
        category: data.category,
        price,
        brand: data.brand,
      });

      form.reset();
      router.push("/products");
    } catch (err) {
      toast.error("Ошибка при создании продукта");
      console.error("Ошибка при создании продукта:", err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название продукта</FormLabel>
              <FormControl>
                <Input placeholder="Название продукта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание продукта</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[100px] max-h-[250px]"
                  placeholder="Описание продукта"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название бренда</FormLabel>
              <FormControl>
                <Input placeholder="Название бренда" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название категории</FormLabel>
              <FormControl>
                <Input placeholder="Название категории" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Цена продукта</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  placeholder="Цена продукта"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Создать продукт</Button>
      </form>
    </Form>
  );
};
