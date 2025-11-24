import { fetchItemById } from '@/fetch'
import type { PuzzleDto } from '@/utils/dtos'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/puzzle/$puzzleId')({
    loader: async ({ params }) => {
        const { puzzleId } = params

        const endpoint = `api/puzzle/`
        const data = await fetchItemById(endpoint, puzzleId)

        return { data, puzzleId}
    },

  component: RouteComponent,
})


function RouteComponent() {
    const loaderdata = useLoaderData({ from: '/puzzle/$puzzleId' })
    const { data } = loaderdata as {
        data: PuzzleDto
      }
    
    return (
        <><PuzzleDetail puzzle={data}/></>
    );

}

function PuzzleDetail({ puzzle }: { puzzle: PuzzleDto }) {
  return (
    <div>
      <h2>Puzzle ID: {puzzle.id}</h2>
      <div className="puzzle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 50px)' }}>
        {puzzle.puzzlePieces.map((piece, index) => (
          <img
            key={index}
            src={piece.imgUrl}
            style={{ width: 50, height: 50 }}
            alt={`Piece ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
