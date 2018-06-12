import React from "react"
import Cats from './cats'
import Home from './home'
import { Route, Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>Cats App</h1>
        </header>

        <Link to="/">Home</Link>
        <Link to="/cats" >Cats</Link> 
        <Route path="/" component={Home} exact={true} />
        <Route path="/cats" component={Cats} />
      
      </div>
    )
  }
}
export default App
