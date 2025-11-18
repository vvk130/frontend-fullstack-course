import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { HorseCompDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/leaderboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <h1>Leaderboard</h1>
  <LeaderBoardFetch/>
  </>)
}


function LeaderBoardFetch() {
  return (
    <GenericPaginatedList<HorseCompDto>
      url="api/CompStatistics/statistics-paginated?PageNumber=1&PageSize=10"
      queryKey="horses"
      renderItem={(horse: HorseCompDto) => (
        <div key={horse.horseId} className="horse-row">
          <div className="horse-info">
            <Link
            to="/$animal/$animalId"
            params={{ animal: "horse", animalId: horse.horseId }}
          >
            {horse.horseId}
          </Link>
          — {horse.totalMoneyWon} — {horse.averageRanking} — {horse.bestRanking} — {horse.compEntriesCount}
          </div>
        </div>
      )}
    />
  );
}
