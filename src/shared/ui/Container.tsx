import { FC, ReactNode } from "react";

import { cn } from "../shadcn";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return <div className={cn("max-w-7xl mx-auto px-2", className)}>{children}</div>;
};
