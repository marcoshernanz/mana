import { db } from "@/database/db";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";

interface TwitterAccountPageProps {
  params: { account: string };
}

export default async function TwitterAccountPage({
  params,
}: TwitterAccountPageProps) {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.username, params.account))
    .then((user) => (user.length === 1 ? user[0] : null));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-orange-50-50 flex h-screen w-screen items-center justify-center dark:bg-slate-950">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white px-7 py-8 text-slate-950 shadow-sm dark:border-orange-600 dark:bg-slate-900/30 dark:text-orange-50">
        <div className="mb-2.5 flex w-full flex-col gap-1">
          <span className="text-2xl font-semibold dark:text-orange-500">
            {params.account}
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            This is the account page for {params.account}
          </span>
        </div>
      </div>
    </div>
  );
}
