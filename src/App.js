import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Explore from "./components/Pages/Explore";
import Faq from "./components/Pages/Faq";
import Home from "./components/Pages/Home";
import Mint from "./components/Pages/Mint";
import Stats from "./components/Pages/Stats";
import Footer from "./components/Footer";
import Detailorigins from "./components/Pages/Detailorigins";
import Ranking from "./components/Pages/Ranking";

function App() {
  return (
    <div className="App">
      <div className="globalcontainer">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/explore/nfts" exact component={Explore}></Route>
            <Route
              path="/explore/nft/origin"
              exact
              component={Detailorigins}
            ></Route>
            <Route path="/faq" exact component={Faq}></Route>
            <Route path="/stats" exact component={Stats}></Route>
            <Route path="/stat/topnfts">{Ranking}</Route>
            <Route path="/mint" exact component={Mint}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
