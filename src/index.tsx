import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, VersionHistoryPage } from "./pages";
import { Header } from "./components";
import "./assets/styles/index.scss";

const App: React.FC = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/version-history" exact component={VersionHistoryPage} />
            <Route path="/" exact component={HomePage} />
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
