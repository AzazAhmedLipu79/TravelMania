// import logo from "./logo.svg";
import "./App.css";
import Banner from "./Component/Pages/Home/Banner/Banner";
import Header from "./Component/Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./Component/Pages/GetStarted/GetStarted";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/Shared/PrivateRoute/PrivateRoute";
import Speciality from "./Component/Pages/Home/Speciality/Speciality";
import Footer from "./Component/Shared/Footer/Footer";
import Services from "./Component/Pages/Services/Services";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <PrivateRoute exact path="/">
            <Banner></Banner>
            <Speciality></Speciality>
            <Services></Services>
            <Footer></Footer>
          </PrivateRoute>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <Route exact path="/GetStarted">
            <GetStarted></GetStarted>
          </Route>
          {/* <Route></Route> */}
          {/* <Route></Route> */}
          {/* <Route></Route> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
