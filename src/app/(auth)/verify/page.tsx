import { buttonVariants } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-[380px] px-5">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-blue-100">
            <Mail className="size-12 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {" "}
            Check your email
          </CardTitle>
          <CardDescription>
            A sign in link has been sent to your email address.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-4 rounded-md border-yellow-500 bg-yellow-50 p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="size-5 text-yellow-500" />
              <p className="ml-2 text-xs font-medium text-yellow-700">
                Be sure to check your spam folder.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href="/"
            className={buttonVariants({
              className: "w-full",
              variant: "outline",
            })}
          >
            <ArrowLeft className="size-4" />
            Back to homepage
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
