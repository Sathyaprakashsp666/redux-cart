import "./App.css";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/products/:id/" exact component={ProductDetails} />
        <Route>404 Page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
