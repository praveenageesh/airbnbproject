import React from 'react';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { BrowserRouter as Router, switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
