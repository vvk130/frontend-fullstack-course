import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import ImageBanner from '@/components/ImageBanner'
import WalletBalance from '@/components/walletBalance'
import LogoutForm from '@/forms/Logout';
import { useState } from 'react';

export const Route = createRootRoute({
  component: () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const storedWalletId = localStorage.getItem('horseappinfo.walletId') || null;
    const storedUserId = localStorage.getItem("horseappinfo.userId") || null;

    return (
      <>
        <ImageBanner />
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close Menu' : 'Menu'}
        </button>

        {menuOpen && (
          <nav>
            <ul>
              <li><Link to="/">Login / Sign Up</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><Link to="/myhorses/all">My Horses</Link></li>
              <li><Link to="/breed">Breed</Link></li>
              <li><Link to="/myalpacas">My Alpacas</Link></li>
              <li><Link to="/horses">All Horses</Link></li>
              <li><Link to="/alpacas">All Alpacas</Link></li>
              <li><Link to="/competitions">Competitions</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/cleanstable">Clean Stable</Link></li>
              <li><Link to="/buyhorses">Buy Animals</Link></li>
              <li><Link to="/puzzles">Puzzles</Link></li>

              {storedUserId && (
                <li>
                  <LogoutForm />
                </li>
              )}
            </ul>
          </nav>
        )}
      <nav>
          {storedWalletId && <WalletBalance walletId={storedWalletId} />}
      </nav>
        <Outlet />
      </>
    )
  },
})


