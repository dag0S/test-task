import type { FC } from "react";

import { Container } from "@/src/shared/ui";

export const Home: FC = () => {
  return (
    <section className="pt-6">
      <Container>
        <h1 className="text-2xl font-medium mb-4">
          Тестовое задание ООО Экосистема Альфа
        </h1>
        <p>
          Задание выполнено с использованием следующих технологического стека:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>Zustand</li>
          <li>Tailwind</li>
          <li>shadcn</li>
          <li>React Hook Form</li>
          <li>zod</li>
        </ul>
        <p>Реализовано следующее:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Страницы: Главная, Продукты, Продукта, Создания продукта, 404
            страница
          </li>
          <li>Просмотр и фильтрация данных</li>
          <li>
            Работа с API{" "}
            <a href="https://dummyjson.com/docs" target="_blank">
              dummyjson
            </a>
          </li>
          <li>Работа со стором</li>
          <li>Адаптивная верстка</li>
        </ul>
      </Container>
    </section>
  );
};
