import React from "react"
import styled from "styled-components"
import AddIngredient from "./AddIngredient"
import IngredientsList from "./IngredientsList"
import FetchRecipe from "./FetchRecipe"
import Recipe from "./Recipe"

interface IngredientType {
  text: string
  weight: number
}

export interface RecipeType {
  // uri
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

interface PropTypes {}
interface StateTypes {
  ingredients: string[]
  recipe: RecipeType | null
}

class App extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      ingredients: [],
      recipe: null
    }
  }

  getChildIngredient = (ingredient: string) => {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] })
  }

  getChildRecipe = (recipe: RecipeType) => {
    this.setState({ recipe })
  }

  render() {
    return (
      <AppStyles className="app">
        <div className="column-1">
          <AddIngredient propogateIngredient={this.getChildIngredient} />
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
        <div className="column-2">
          <Recipe recipe={testRecipe} propogateRecipe={this.getChildRecipe} />
          <FetchRecipe
            ingredients={this.state.ingredients}
            query={this.state.ingredients.join("+")}
          />
        </div>
      </AppStyles>
    )
  }
}

const testRecipe = {
  uri:
    "http://www.edamam.com/ontologies/edamam.owl#recipe_51b857855fe035e544b0f27808f12294",
  label: "Pina colada fro-yo",
  image:
    "https://www.edamam.com/web-img/4f0/4f0a9136e3e399a6de787df15be88003.jpg",
  source: "Jamie Oliver",
  url: "http://www.jamieoliver.com/recipes/fruit-recipes/pina-colada-fro-yo/",
  shareAs:
    "http://www.edamam.com/recipe/pina-colada-fro-yo-51b857855fe035e544b0f27808f12294/yo",
  yield: 6,
  dietLabels: [],
  healthLabels: ["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"],
  cautions: ["Sulfites"],
  ingredientLines: [
    "250 g Greek-style coconut yoghurt",
    "500 g frozen chopped tropical fruit, such as pineapple, mango, banana",
    "75 g dried tropical fruit",
    "4-6 ice cream scones"
  ],
  ingredients: [
    {
      text: "250 g Greek-style coconut yoghurt",
      weight: 250
    },
    {
      text:
        "500 g frozen chopped tropical fruit, such as pineapple, mango, banana",
      weight: 500
    },
    {
      text: "75 g dried tropical fruit",
      weight: 75
    },
    {
      text: "4-6 ice cream scones",
      weight: 285
    }
  ],
  calories: 1463.6,
  totalWeight: 1110,
  totalTime: 30
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
