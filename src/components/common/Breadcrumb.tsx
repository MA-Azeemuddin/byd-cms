"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Breadcrumb() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; href: string }[]
  >([]);
  const [currentPathName, setCurrentPathName] = useState<string>("");

  useEffect(() => {
    if (pathname) {
      // Split the pathname into segments
      const segments = pathname.split("/").filter(Boolean);

      // Helper to capitalize each segment
      const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);

      // Create breadcrumb links
      const newBreadcrumbs = segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const name = capitalize(segment.replace(/-/g, " ")); // Capitalize and format

        return { name, href };
      });

      // Update state
      setBreadcrumbs(newBreadcrumbs);
      setCurrentPathName(
        newBreadcrumbs.length > 0
          ? newBreadcrumbs[newBreadcrumbs.length - 1].name
          : "Home"
      );
    }
  }, [pathname]);

  return (
    <>
      {/* Breadcrumbs for medium and larger screens */}
      <nav aria-label="breadcrumb" className="hidden md:flex">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
          </li>
          {breadcrumbs.map(({ name, href }, index) => (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <Link
                href={href}
                className={cn(
                  index === breadcrumbs.length - 1
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                  "flex items-center gap-3 px-3 py-2 transition-all"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Current path name for small screens */}
      <div className="flex md:hidden items-center px-4 py-2 bg-muted/10 rounded-lg">
        <Link
          href={pathname}
          className="text-primary font-semibold hover:underline"
        >
          {currentPathName}
        </Link>
      </div>
    </>
  );
}
