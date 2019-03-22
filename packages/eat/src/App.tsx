import React, { Component } from "react"
import AddIngredient from "./AddIngredient"
import IngredientsList from "./IngredientsList"

interface PropTypes {}
interface StateTypes {
  ingredients: string[]
}

class App extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  getChildIngredient = (ingredient: string) => {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] })
  }

  render() {
    return (
      <div className="app">
        <AddIngredient propogateIngredient={this.getChildIngredient} />
        <IngredientsList ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default App
