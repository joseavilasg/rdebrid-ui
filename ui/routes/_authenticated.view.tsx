import DebridList from "@/ui/components/debrid-list";
import { debridItemsQueryOptions } from "@/ui/utils/queryOptions";
import { debridParamsSchema } from "@/ui/utils/schema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/view")({
  component: DebridList,
  validateSearch: (search) => debridParamsSchema.parse(search),
  loaderDeps: ({ search }) => ({ search }),
  loader: ({ context: { queryClient }, deps: { search } }) =>
    queryClient.ensureQueryData(debridItemsQueryOptions(search)),
});
