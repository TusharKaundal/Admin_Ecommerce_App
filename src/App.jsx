import CartSideBar from "./components/CartSideBar";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <div className="relative max-w-screen p-2 md:px-20 overflow-x-hidden">
      <Header />
      <StatsCard />
      <ProductTable />
      <CartSideBar />
    </div>
  );
}

export default App;
