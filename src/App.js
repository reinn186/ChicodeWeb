import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/HomePage/Home';
import Project from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// import Products from './pages/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
      <div class="main">
        <Route path='/' exact component={Home} />
        <Route path= '/About' exact component={About} />
        <Route path= '/Project' exact component={Project} />
        </div>
        {/* <Route path= '/Contact' exact component={Contact} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
