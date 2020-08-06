import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, VersionHistoryPage, ContributorsPage } from "./pages";
import { Header, Footer } from "./components";
import "./assets/styles/index.scss";

const App: React.FC = () => (
    <Router>
        <div id="main">
            <Header />
            <Switch>
                <Route path="/contributors" exact component={ContributorsPage} />
                <Route path="/version-history" exact component={VersionHistoryPage} />
                <Route path="/" exact component={HomePage} />
            </Switch>
        </div>
        <Footer />
    </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
