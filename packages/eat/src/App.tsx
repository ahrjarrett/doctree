import React from "react"
import styled from "styled-components"
import AddIngredient from "./AddIngredient"
import IngredientsList from "./IngredientsList"
import FetchRecipe from "./FetchRecipe"
import Recipe from "./Recipe"

export interface RecipeType {
  label: string
  image: string
  source: string
  url: string
  yield: number
  cautions: string[]
  dietLabels: string[]
  healthLabels: string[]
  ingredientLines: string[]
  ingredients: IngredientType[]
  calories: number
  totalTime: number
  totalWeight: number
}

interface IngredientType {
  text: string
  weight: number
}

interface PropTypes {}
interface StateTypes {
  ingredients: string[]
  recipes: [{ recipe: RecipeType }] | null
}

class App extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      ingredients: [],
      recipes: null
    }
  }

  getChildIngredient = (ingredient: string) => {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] })
  }

  getChildRecipes = (recipes: [{ recipe: RecipeType }]) => {
    this.setState({ recipes })
  }

  render() {
    return (
      <AppStyles className="app">
        <div className="column-1">
          <AddIngredient propogateIngredient={this.getChildIngredient} />
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
        <div className="column-2">
          <FetchRecipe
            ingredients={this.state.ingredients}
            propogateRecipes={this.getChildRecipes}
            query={this.state.ingredients.join("+")}
          />
          <div className="recipes">
            {this.state.recipes &&
              this.state.recipes.map(({ recipe }, i) => (
                <Recipe recipe={recipe} key={i} />
              ))}
          </div>
        </div>
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
