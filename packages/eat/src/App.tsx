import React from "react"
import styled from "styled-components"
import AddIngredient from "./AddIngredient"
import IngredientsList from "./IngredientsList"
import FetchRecipe from "./FetchRecipe"

interface PropTypes {}
interface StateTypes {
  ingredients: string[]
}

class App extends React.Component<PropTypes, StateTypes> {
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
      <AppStyles className="app">
        <div className="column-1">
          <AddIngredient propogateIngredient={this.getChildIngredient} />
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
        <div className="column-2" />
        <FetchRecipe ingredients={this.state.ingredients} />
      </AppStyles>
    )
  }
}

const AppStyles = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  .column-1 {
    width: 50%;
  }

  .column-2 {
    width: 50%;
  }
`

export default App
