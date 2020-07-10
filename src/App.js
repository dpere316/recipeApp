import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Breakfast from "./components/Breakfast";
import SingleFood from "./components/SingleFood";
import EthnicFood from "./components/EthnicFood";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/foods/:id"
            render={(props) => <SingleFood {...props} />}
          />
          <Route
            exact
            path="/ethnicfood/:ethnicity"
            render={(props) => <EthnicFood {...props} />}
          />

          <Route exact path ="/searchfood" render={()=> <Navbar/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
