import { Button } from "@/components/shadcn/ui/button";
import { auth, signIn, signOut } from "@/app/utils/auth";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";

export async function AuthButton() {
  const session = await auth();
  return (
    <>
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button className="hidden lg:flex">
            <LogOut className="h-4 w-4" />
            <span className="text-xs">Logout</span>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <LogOut className="h-4 w-4" />
          </Button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Link href="/login">
            <Button className="hidden lg:flex">
              <LogIn className="h-4 w-4" />
              <span className="text-xs">Login</span>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <LogIn className="h-4 w-4" />
            </Button>
          </Link>
        </form>
      )}
    </>
  );
}
