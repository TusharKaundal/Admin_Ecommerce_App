import { lazy, Suspense } from "react";
import CartSideBar from "./components/CartSideBar";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import { CardGridSkeleton } from "./ui/skeleton";
const StatsCard = lazy(() => import("./components/StatsCard"));

function App() {
  return (
    <div className="relative max-w-screen p-2 md:px-20 overflow-x-hidden">
      <Header />
      <Suspense fallback={<CardGridSkeleton />}>
        <StatsCard />
      </Suspense>
      <ProductTable />
      <CartSideBar />
    </div>
  );
}

export default App;
