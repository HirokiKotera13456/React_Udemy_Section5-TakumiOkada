import { BrowserRouter, Link, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/">Page1</Link>
        <br />
        <Link to="/">Page2</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
      <Switch></Switch>
    </BrowserRouter>
  );
}
