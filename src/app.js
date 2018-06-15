import React from "react"
import Cats from './cats'
import Home from './home'
import { Route, Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div id="root">
        <header className="header">
          <img src="./asset/cat2offWHT2.png" alt="cat" className="cat-img" />
          <h1 className="header-text">Awesome Cats</h1>
          <nav className="navigation">
            <Link to="/" className="home">Home</Link>
            <Link to="/cats" className="cats">Cats</Link>
          </nav>
        </header>
        <hr />
        <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/cats" component={Cats} />
        </div>
      </div>
    )
  }
}
export default App
