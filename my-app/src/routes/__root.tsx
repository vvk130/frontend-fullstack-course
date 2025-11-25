import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import ImageBanner from '@/components/ImageBanner'
import WalletBalance from '@/components/walletBalance'
import LogoutForm from '@/forms/Logout';

export const Route = createRootRoute({
  component: () => {
    const storedWalletId = localStorage.getItem('horseappinfo.walletId') || null;
    const storedUser = localStorage.getItem('horseappinfo.userId') || null;

    return (
      <>
        <ImageBanner />

        <nav>
          <ul>
            <Link to="/">Login / Sign Up</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/myhorses/all">My Horses</Link>
            <Link to="/breed">Breed</Link>
            <Link to="/myalpacas">My Alpacas</Link>
            <Link to="/horses">All Horses</Link>
            <Link to="/alpacas">All Alpacas</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/images">Images</Link>
            <Link to="/cleanstable">Clean Stable</Link>
            <Link to="/buyhorses">Buy Animals</Link>
            <Link to="/puzzles">Puzzles</Link>
            {storedUser && <LogoutForm/>}
          </ul>
        </nav>
      <nav>
          {storedWalletId && <WalletBalance walletId={storedWalletId} />}
      </nav>
        <Outlet />
      </>
    )
  },
})


