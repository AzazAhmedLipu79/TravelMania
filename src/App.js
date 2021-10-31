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
import MyJourney from "./Component/Pages/MyJourney/MyJourney";
import AddNewService from "./Component/Pages/AddNewService/AddNewService";
import ManageAllJourney from "./Component/Pages/ManageAllJourney/ManageAllJourney";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Speciality></Speciality>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/MyJourney">
            <MyJourney></MyJourney>
          </PrivateRoute>

          <PrivateRoute exact path="/ManageAllJourney">
            <ManageAllJourney></ManageAllJourney>
          </PrivateRoute>

          <PrivateRoute exact path="/AddNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>

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
