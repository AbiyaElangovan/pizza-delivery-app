import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./Components/Navbar/Navbar.component";
import Home from "./Components/Home/Home.component";
import Register from "./Components/Register/Register.component";
import Login from "./Components/Login/Login.component";
import { UserProvider } from "./Contexts/UserContext";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.component";
import AddressesComp from "./Components/AddresssCollection/AddressesComp.component";
import Inventory from "./Components/Inventory/Inventory.component";
import ManageStocks from "./Components/StockManagement/Manage_Stocks.component";
import ManagePizza from "./Components/PizzaManagement/ManagePizza.component";
import Menu from "./Components/Menu/Menu.component";
import { CartProvider } from "./Contexts/CartContext";
import CartCheckOutPage from "./Components/Cart/CartCheckOutPage.component";
import OrderComp from "./Components/Orders/Order.component";
import FullOrderComp from "./Components/Orders/FullOrder.component";
import ManageOrderComp from "./Components/ManageOrder/ManageOrder.component";
import { OrderProvider } from "./Contexts/OrderContext";
const App = () => {
  return (
    <>
      <UserProvider>
        <OrderProvider>
          <CartProvider>
            <BrowserRouter>
              <NavbarComp />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route
                  path="/users/reset-password"
                  element={<ForgetPassword />}
                />
                <Route
                  path="/users/profile/myaddresses"
                  element={<AddressesComp />}
                />
                <Route path="/users/profile/myorders" element={<OrderComp />} />
                <Route path="/users/profile/myorders/:orderId" element={<FullOrderComp />} />
                <Route path="/users/inventory" element={<Inventory />} />
                <Route
                  path="/users/inventory/manage-stocks"
                  element={<ManageStocks />}
                />
                <Route
                  path="/users/inventory/manage-orders"
                  element={<ManageOrderComp />}
                />
                <Route
                  path="/users/inventory/manage-pizza"
                  element={<ManagePizza />}
                />
                <Route path="/users/menu" element={<Menu />} />
                <Route path="/users/cart" element={<CartCheckOutPage />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </OrderProvider>
      </UserProvider>
    </>
  );
};

export default App;