import type { FC } from "react";
import type { Metadata } from "next";

import { Home } from "@/src/widgets/Home";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage: FC = () => {
  return <Home />;
};

export default HomePage;
