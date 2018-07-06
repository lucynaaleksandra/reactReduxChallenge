import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import App from './app'
import store from './store'
// import "./help"


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById("root"))





// 1. Build a react-redux app that has two routes, the main / route, and a /cats route. 
// 2. The user should always be able to navigate to either route from the ui.
// 3. The cats route will load json data from "https://catrescue.herokuapp.com/petfinder/stpetersburg".  

// 4. The cats route will display a spinner while loading the json data, and hide the spinner once data is loaded.  
// 5. The cats route will render a grid of cat images & name aka "cards" from the json data.  

// 6. Each cat card will be clickable to toggle a "selected" state.

// 7. Each cat card will be visibly identified as selected or unselected in some way, such as opacity, a border color, or other visible indicator that lets the user see the the cat is either selected or not.

// 8. Bonus!!!     The cats route will include a toggle button to show only cat cards that have been selected by the user.



