import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { CompDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/competitions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <h1>Competitions</h1>
  <CompFetch/>
  </>
  );
};

function CompFetch() {
  return (
    <GenericPaginatedList<CompDto>
      url="api/competitions/paginated?PageNumber=1&PageSize=10"
      queryKey="competitions"
      renderItem={(comp: CompDto) => (
        <div key={comp.id} className="horse-row">
          <div className="horse-info">
            <Link to="/competition/$competitionId" params={{competitionId: comp.id}}>Click to compete</Link> {comp.id} — Competition ends: {comp.endTime} 
          </div>
        </div>
      )}
    />
  );
}
