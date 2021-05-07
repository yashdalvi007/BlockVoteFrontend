import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Explore from './pages/Explore';
import Results from './pages/Results';
import {AuthProvider} from './utils/AuthContext';
import {VoteProvider} from './utils/VoteContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <VoteProvider>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/about-us'>
          <AboutUs />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/vote'>
          <Vote />
        </Route>
        <Route exact path='/explore'>
          <Explore />
        </Route>
        <Route exact path='/results'>
          <Results />
        </Route>
        </VoteProvider>
        </AuthProvider>
    </Switch>
    </Router>
  );
}

export default App;
