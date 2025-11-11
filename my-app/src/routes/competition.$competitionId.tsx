import { DetailTable } from '@/components/DetailTable'
import { fetchItemById } from '@/fetch'
import { createFileRoute, useLoaderData} from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$competitionId')({
  loader: async ({ params }) => {
    const { competitionId } = params

    const endpoint = `api/competition/${competitionId}s/`
    const data = await fetchItemById(endpoint, competitionId)

    return { data }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = useLoaderData({ from: '/competition/$competitionId' })

  return (<><DetailTable data={data} /></>)
}
