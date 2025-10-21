import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
//dhhdhddh
import ImageBanner from '../components/ImageBanner'

export const Route = createRootRoute({
  component: () => (
    <>
      <ImageBanner />
        <nav>
          <ul>
            <a href="/">Login/SignUp</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/myhorses">MyHorses</a>
            <a href="/horses">Search Horses</a>
            <a href="/puzzles">Puzzles</a>
            <a href="/breeds">Breeds</a>
            <a href="/levels">Levels</a>
            <a href="/instructions">Instructions</a>
            <a href="/competitions">Competitions</a>
            <a href="/market">Market</a>
          </ul>
        </nav>
        <div className="item-bar">$: 10000 Level: 1</div>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
