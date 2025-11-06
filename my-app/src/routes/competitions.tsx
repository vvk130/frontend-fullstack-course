import GenericPaginatedList from '@/components/GenericPaginatedList';
import CompeteForm from '@/forms/CompeteForm';
import type { CompDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/competitions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <div>Hello "/competitions"!</div>
  <CompeteForm/>
  <CompFetch/>
  </>
  );
};

function CompFetch() {
  return (
    <GenericPaginatedList<CompDto>
      url="api/competitions/paginated?PageNumber=1&PageSize=10"
      queryKey="horses"
      renderItem={(comp: CompDto) => (
        <div key={comp.id} className="horse-row">
          <div className="horse-info">
            <Link to="/competition/$competitionId" params={{competitionId: comp.id}}>{comp.id}</Link> — {comp.endTime} 
          </div>
        </div>
      )}
    />
  );
}
