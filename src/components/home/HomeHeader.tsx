import { Icons } from "../common/Icons";
import { ThemeToggle } from "../common/ThemeToggle";
import { Button } from "../shadcn/ui/button";
import { Separator } from "../shadcn/ui/separator";
import { AuthButton } from "./Auth-Button";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-14 px-4 lg:px-4">
        <MainNav />
        <MobileNav />
        <nav className="flex items-center gap-4 lg:gap-8">
          <ThemeToggle />
          <div className="hidden md:flex">
            <Button variant="outline">
              <Icons.gitHub />
              GitHub
              <Separator orientation="vertical" />
              <span className="px-3">5464</span>
            </Button>
          </div>

          <AuthButton />
        </nav>
      </div>
    </header>
  );
}
