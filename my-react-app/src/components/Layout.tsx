import type { ReactNode } from 'react';
import ImageBanner from './ImageBanner';  

type LayoutProps = {
  children: ReactNode; // This will be the page content
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ImageBanner /> 
      <nav>
        <ul>
          <a href="/">Login/SignUp</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/myhorses">MyHorses</a>
          <a href="/seacrhhorses">Search Horses</a>
          <a href="/puzzles">Puzzles</a>
          <a href="/breeds">Breeds</a>
          <a href="/levels">Levels</a>
          <a href="/instructions">Instructions</a>
          <a href="/competitions">Competitions</a>
          <a href="/market">Market</a>
        </ul>
      </nav>
      <div className="item-bar">$: 10000 Level: 1</div>
      <div className="main-content">
        {children}  
      </div>
    </>
  );
};

export default Layout;
