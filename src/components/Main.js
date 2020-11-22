import React from "react";
import { 
    Switch,
    Route
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Terms from "./Terms";

function Main () {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="/faq">
                    <FAQ />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;