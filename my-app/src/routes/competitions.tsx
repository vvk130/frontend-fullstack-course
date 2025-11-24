import GenericPaginatedList from '@/components/GenericPaginatedList';
import type { CompDto } from '@/utils/dtos';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/competitions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <h1>Competitions</h1>
  <Link to="/competition/create">Create new competition</Link>
  <CompFetch/>
  </>
  );
};

function CompFetch() {
  return (
    <>
    <Outlet/>
    <GenericPaginatedList<CompDto>
      url="api/competitions/paginated?PageNumber=1&PageSize=10"
      queryKey="competitions"
      renderItem={(comp: CompDto) => (
        <div key={comp.id} className="horse-row">
          <div className="horse-info">
            <Link to="/competition/$compId/compete" params={{compId: comp.id}}>Click to compete</Link> {comp.id} — Competition ends: {comp.endTime}
              — 
            <Link to="/competition/$compId/update" params={{compId: comp.id}}>Update</Link>{ }||{ }
            <Link to="/competitions/$itemId/delete" params={{itemId: comp.id}}>Delete</Link>
          </div>
        </div>
      )}
    />
    </>
  );
}
