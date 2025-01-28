"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden mx-4 md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <span className="font-bold lg:inline-block">eTameer.co</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4 text-sm xl:gap-6">
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
    </div>
  );
}
