import HomePage from "./components/homePage";
import RecentPost from "./components/our-recentpost";
import CartPage from "./components/Cartpage1";
import PopularPost from "./components/popularPost";
import Getstarted from "./components/Getstarted";

export default function Home() {
  return (
    <div>
      <HomePage />
      <RecentPost />
      <CartPage />
      <PopularPost />
      <Getstarted />
    </div>
  );
}
