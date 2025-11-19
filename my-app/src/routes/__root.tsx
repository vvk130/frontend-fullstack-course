import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import ImageBanner from '../components/ImageBanner'
import WalletBalance from '@/components/walletBalance'
import { Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <ImageBanner />
        <nav>
          <ul>
        <Link to="/">Login / Sign Up</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/myhorses">My Horses</Link>
        <Link to="/myhorses">My Alpacas</Link>
        <Link to="/horses">Search Horses</Link>
        <Link to="/puzzles">Puzzles</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/cleanstable">Clean Stable</Link>
        <Link to="/buyhorses">Buy Animals</Link>
          </ul>
        </nav>
        <div className="item-bar"><WalletBalance walletId='35edb2bb-8822-4db5-bb2b-2a0c3b26d54d'/> Weather:☀️</div>
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
