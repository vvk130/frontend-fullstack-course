import BuyAnimalForm from '@/forms/BuyAnimalForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ad/$adId/update')({
  loader: async ({ params }) => {
    const { adId } = params
    return { adId }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { adId } = Route.useParams()
  return <>
  If the ad type is Auction you have to put a number over 200 higher than the price in the ad
  <BuyAnimalForm adId={adId}/>
  </>
}
