// import logo from "./logo.svg";
import "./App.css";
import Banner from "./Component/Pages/Home/Banner/Banner";
import Header from "./Component/Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./Component/Pages/GetStarted/GetStarted";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/Shared/PrivateRoute/PrivateRoute";
import Speciality from "./Component/Pages/Home/Speciality/Speciality";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <PrivateRoute exact path="/">
            <Banner></Banner>
            <Speciality></Speciality>
          </PrivateRoute>
          <Route exact path="/GetStarted">
            <GetStarted></GetStarted>
          </Route>
          {/* <Route></Route> */}
          {/* <Route></Route> */}
          {/* <Route></Route> */}
        </Switch>

        <h2>Travel Mania</h2>
      </Router>
    </AuthProvider>
  );
}

export default App;
