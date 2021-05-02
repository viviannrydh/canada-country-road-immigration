import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TemporaryResidence from './pages/TemporaryResidence';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Fees from './pages/Fees';
import Services from './pages/Services';
import PermanentResidence from './pages/PermanentResidence';
import Citizenship from './pages/Citizenship';
import Travel from './pages/Travel';
import Introduction from './pages/Introduction';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/fees" component={Fees} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/services" exact component={Services} />
              <Switch>
                <Route path="/services/temporaryresidence" component={TemporaryResidence} />
                <Route path="/services/permanentresidence" component={PermanentResidence} />
                <Route path="/services/citizenship" component={Citizenship} />
                <Route path="/services/travel" component={Travel} />
              </Switch>
              
        </Switch>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
