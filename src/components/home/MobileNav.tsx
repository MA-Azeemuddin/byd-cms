"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../shadcn/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden mx-4 flex">
      <Sheet>
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
            <span className="font-bold lg:inline-block">eTameer.co</span>
          </Link>
          <nav className="md:hidden flex flex-col gap-4 text-sm xl:gap-6 mt-12">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/80"
              )}
            >
              Home
            </Link>
            <Link
              href=""
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/docs/components") &&
                  !pathname?.startsWith("/docs/component/chart")
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              Projects
            </Link>
            <Link
              href=""
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/blocks")
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              Listings
            </Link>
            <Link
              href=""
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/docs") || pathname?.startsWith("/")
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              CMS
            </Link>
            <Link
              href=""
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/about")
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              About
            </Link>
            <Link
              href=""
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/contact")
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
