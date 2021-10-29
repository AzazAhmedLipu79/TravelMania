// import logo from "./logo.svg";
import "./App.css";
import Banner from "./Component/Pages/Home/Banner/Banner";
import Header from "./Component/Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./Component/Pages/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
          <Route exact path="/GetStarted">
            <GetStarted></GetStarted>
          </Route>
          {/* <Route></Route> */}
          {/* <Route></Route> */}
          {/* <Route></Route> */}
        </Switch>

        <h2>Travel Mania</h2>
      </Router>
    </div>
  );
}

export default App;
