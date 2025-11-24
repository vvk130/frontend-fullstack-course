import GenericPaginatedList from '@/components/GenericPaginatedList'
import type { CompResultDto } from '@/utils/dtos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$animal/$animalId/results')({
  loader: async ({ params }) => {
    const { animal, animalId } = params
    return { animal, animalId}
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { animalId } = Route.useParams()

  return (
    <GenericPaginatedList<CompResultDto>
    url={`api/compresult/search?Filter.HorseId=${animalId}`}
    queryKey={`compresults-${animalId}`}
    renderItem={(comp) => (
      <div key={comp.id}>
        {comp.competitionTime} — Ranking: {comp.ranking} — MoneyWon: {comp.moneyWon} — HorseId: {comp.horseId}
      </div>
    )}
  />
    );
}
