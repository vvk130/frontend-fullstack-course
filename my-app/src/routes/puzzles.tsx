import GenericPaginatedList from '@/components/GenericPaginatedList';
import PuzzleForm from '@/forms/PuzzleForm';
import type { PuzzleDto } from '@/utils/dtos';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/puzzles')({
  component: PuzzlesListRoute,
})

function PuzzlesListRoute() {
  return (
    <>
    <PuzzleForm/>
    <GenericPaginatedList<PuzzleDto>
      url="api/puzzle/paginated?"
      queryKey="puzzles"
      renderItem={(puzzle: PuzzleDto) => (
        <div key={puzzle.id} className="puzzle-row">
          {puzzle.id}
          ||
          <Link
            to="/puzzle/$puzzleId"
            params={{ puzzleId: puzzle.id }}
          >
            See puzzle
          </Link>
        </div>
      )}
    />
    </>
  );
}

