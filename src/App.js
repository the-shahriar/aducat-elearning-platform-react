import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/About/About';
import Courses from './component/Courses/Courses';
import Pricing from './component/Pricing/Pricing';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
