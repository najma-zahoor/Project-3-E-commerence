import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          MiniStore
        </h1>
        <div className="space-x-5">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;