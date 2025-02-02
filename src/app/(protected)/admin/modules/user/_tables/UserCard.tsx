import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Separator } from "@/components/shadcn/ui/separator";
import { UserTable } from "./UserTable";

export function UserCard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 ">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-2xl font-semibold md:tracking-normal tracking-tight">
            User Account Management
          </CardTitle>
          <CardDescription className="md:pb-4 text-sm">
            Add, edit, and delete users.
          </CardDescription>
          <Separator />
          <CardContent>
            <UserTable />
          </CardContent>
          <CardFooter></CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
