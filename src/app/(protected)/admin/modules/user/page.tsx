import { UserCard } from "@/app/(protected)/admin/modules/user/_tables/UserCard";

export default function UserPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-muted/50 border-t">
      <UserCard />
    </main>
  );
}
