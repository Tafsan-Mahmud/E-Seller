import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Cart from "./components/Cart"
import Details from "./components/Details";
import MainHome from "./components/MainHome/MainHome";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Provider>
  );
}

export default App;
