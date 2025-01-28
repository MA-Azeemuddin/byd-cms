"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  submitButtonText: string;
  icon?: ReactNode;
}

export function SubmitButton({ submitButtonText, icon }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      <div className="py-3">
        {pending ? (
          <Button disabled className="w-full">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Please wait...
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            {icon}
            {submitButtonText}
          </Button>
        )}
      </div>
    </>
  );
}
