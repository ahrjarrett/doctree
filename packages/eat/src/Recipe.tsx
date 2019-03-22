import React from "react"
import { RecipeType } from "./App"

interface PropTypes {
  recipe: RecipeType | null
}

interface StateTypes {}

class Recipe extends React.Component<PropTypes, StateTypes> {
  render() {
    const { recipe } = this.props
    return (
      <div className="recipe">
        <h1>Recipe:</h1>
        {recipe && (
          <div>
            <p>Label: {recipe.label}</p>
            <div>
              <img src={recipe.image} alt={recipe.label} />
            </div>
            <a href={recipe.url} target="_blank">
              Source link
            </a>
            <p>Calories: {recipe.calories}</p>
            <p>Makes {recipe.yield} servings</p>
            <p>Cooking time: {recipe.totalTime}</p>
            <ul>
              <p>Ingredient lines:</p>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>
                  <div>{ingredient.text}</div>
                  <div>Weight: {ingredient.weight}g</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Recipe
