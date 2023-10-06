import { RepositoryCard } from "@/components/repository-card";
import { RepositorySearchForm } from "@/components/repository-search-form";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-xl">Customize your repository search</h3>
              <RepositorySearchForm />
            </div>
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="flex flex-col">
            <h3 className="text-xl">3 repositories founded</h3>
            <div className="flex flex-col">
              <RepositoryCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
