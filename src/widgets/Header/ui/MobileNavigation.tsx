"use client";

import { Menu } from "lucide-react";
import { useState, type FC } from "react";

import {
  Button,
  cn,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "@/src/shared/shadcn";
import { Navigation } from "./Navigation";

interface Props {
  className?: string;
}

export const MobileNavigation: FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Меню</SheetTitle>
          </SheetHeader>
          <Navigation className="flex-col" onClick={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
