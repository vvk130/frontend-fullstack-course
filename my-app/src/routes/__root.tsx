import { Outlet, createRootRoute } from '@tanstack/react-router'
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
        <Link to="/myalpacas">My Alpacas</Link>
        <Link to="/horses">All Horses</Link>
        <Link to="/alpacas">All Alpacas</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/images">Images</Link>
        <Link to="/cleanstable">Clean Stable</Link>
        <Link to="/buyhorses">Buy Animals</Link>
        <Link to="/wallet">Wallet</Link>
          </ul>
        </nav>
        <div className="item-bar"><WalletBalance walletId='36593704-5d33-4618-8a0c-2c35a1c89123'/> Weather:☀️</div>
      <Outlet />
    </>
  ),
})
