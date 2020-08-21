import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, VersionHistoryPage, ContributorsPage, CategoryPage } from "./pages";
import { Header, Footer } from "./components";
import "./assets/styles/index.scss";

const store = createStore(
    rootReducer,
    {},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (a) => a,
);

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <div id="main">
                <Header />
                <Switch>
                    <Route path="/contributors" exact component={ContributorsPage} />
                    <Route path="/version-history" exact component={VersionHistoryPage} />
                    <Route path="/category/:name" exact component={CategoryPage} />
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
            <Footer />
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
