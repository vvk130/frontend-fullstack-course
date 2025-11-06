// import { createFileRoute } from '@tanstack/react-router'
// import { fetchItemById } from './$animal.$animalId'
// import type { HorseCompDto } from '@/utils/dtos'

// export const Route = createFileRoute('/horse/$horseId/compstats')({
//   loader: async ({ params: { horseId } }) => {
//     return fetchItemById<HorseCompDto>('api/Horses/', horseId)
//   },
//   component: RouteComponent,
// })

// function RouteComponent() {
//   const horse = Route.useLoaderData()

//   return (<>
//   <h1>CompStats</h1>
//     <div>
//     {/* {horse.value.totalMoneyWon} — {horse.value.averageRanking} — {horse.i.bestRanking} — {horse.i.compEntriesCount} */}
//     </div>
//   </>)
// }
