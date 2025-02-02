import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import Image from "next/image";
import { Icons } from "@/components/common/Icons";

import { signIn } from "@/app/utils/auth";
import { SubmitButton } from "@/components/common/Submit-Button";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width="20" height="20" alt="etameer" />
            <span className="">eTameer.co</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-semibold">
            Sign in to your account
          </h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <form>
            <Button variant="outline" className="w-full">
              <Icons.google />
              Continue with Google
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button variant="outline" className="w-full">
              <Icons.gitHub />
              Continue with GitHub
            </Button>
          </form>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        <form
          action={async (formData) => {
            "use server";
            await signIn("resend", formData);
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="me@example.com"
                required
              />
              <SubmitButton submitButtonText="Continue with Email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
