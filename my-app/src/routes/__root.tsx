import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import ImageBanner from '../components/ImageBanner'
import WalletBalance from '@/components/walletBalance'
            // <a href="/">Login/SignUp</a>
            // <a href="/leaderboard">Leaderboard</a>
            // <a href="/myhorses">MyHorses</a>
            // <a href="/horses">Search Horses</a>
            // <a href="/puzzles">Puzzles</a>
            // <a href="/breeds">Breeds</a>
            // <a href="/levels">Levels</a>
            // <a href="/instructions">Instructions</a>
            // <a href="/competitions">Competitions</a>
            // <a href="/market">Market</a>
            // <a href="/quiz">Quiz</a>
            // <a href="/wallet">Wallet</a>

export const Route = createRootRoute({
  component: () => (
    <>
      <ImageBanner />
        <nav>
          <ul>
          {/* NAV START */}
          <a href="/">Login/SignUp</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/myhorses">MyHorses</a>
          <a href="/horses">Search Horses</a>
          <a href="/puzzles">Puzzles</a>
          <a href="/breeds">Breeds</a>
          <a href="/competitions">Competitions</a>
          <a href="/quiz">Quiz</a>
          <a href="/wallet">Wallet</a>
          <a href="/cleanstable">Clean stable</a>
          <a href="/buyhorses">Buy Horses</a>
          {/* NAV END */}
          </ul>
        </nav>
        <div className="item-bar"><WalletBalance walletId='d63793de-dd66-4130-bf13-e78292f074a8'/> <span>Level: 1</span> Weather:☀️</div>
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
