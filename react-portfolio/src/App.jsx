import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer'; // Comment or remove this line
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
      {/* <Footer /> // Comment or remove this line */}
    </div>
  </Router>
);

export default App;
