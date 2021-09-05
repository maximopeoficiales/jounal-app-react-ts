import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import JournalScreen from "../screens/journal/JournalScreen/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
