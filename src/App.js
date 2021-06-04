import "./App.css";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import Visit from "./Pages/Visit";
import Search from "./Pages/Search";
import SideBar from "./SideBar";
import SecondSidebar from "./SecondSidebar";
import Profile from "./Pages/Profile";
import SingleFriend from "./Pages/SingleFriend";
import Friends from "./Pages/Friends";
import Events from "./Pages/Events";

function App() {
  return (
    <>
      <Nav />
      <SideBar />
      <SecondSidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/visit" component={Visit} />
        <Route path="/settings" component={Settings} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/friends" component={Friends} />
        <Route path="/events" component={Events} />
        <Route path="/friends:id" component={SingleFriend} />
      </Switch>
    </>
  );
}

export default App;
