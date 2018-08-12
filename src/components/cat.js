import React from "react"
import classNames from "classnames"

export default class Cat extends React.Component {

  state = {
    selected: false,
  }

  render() {
    let {
      cat
    } = this.props
    
    let {
      selected = false,
    } = this.state

    let className = classNames({ 
      "cr-cat": true,
      "cr-cat--selected": selected, 
    })

    return (
      <div className={className}>
        <img className="cr-cat__img"
          src={`${cat.photos[0]}`}
          onClick={this.toggleCard}
        />
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
      </div>
    )
  }

  toggleCard = () => {
    let {
      selected = false,
    } = this.state

    this.setState({
      selected: selected ? false : true,
    })
  }

}