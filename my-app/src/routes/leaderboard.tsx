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
            to="/$animal/$animalId/info"
            params={{ animal: "horse", animalId: horse.horseId }}
          >
            {horse.horseId}
          </Link>
          — Money Won: {horse.totalMoneyWon} — Average Ranking: {horse.averageRanking} — Best Ranking: {horse.bestRanking} — Competitions Entered Count: {horse.compEntriesCount}
          </div>
        </div>
      )}
    />
  );
}
