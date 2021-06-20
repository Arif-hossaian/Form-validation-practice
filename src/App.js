import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx"
import Result from "./pages/Result.jsx";
import { Step1 } from "./pages/Step1.jsx";
import { Step2 } from "./pages/Step2.jsx";
import { Step3 } from "./pages/Step3.jsx";

const App = () => {
  return (
    <>
    <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/step3" component={Step3} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
