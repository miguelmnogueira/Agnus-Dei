import "./styles/App.css";
import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";
import CartNav from "./components/CartPage/CartNav";
import Nav from "./components/Nav";
import Cart from "./pages/CartPage";

function App() {
    return (
        <>
            <Nav />
            <Cart />
        </>
    );
}

export default App;
