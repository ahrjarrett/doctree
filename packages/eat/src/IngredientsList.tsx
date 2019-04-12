import React from "react"
import Ingredient from "./Ingredient"

interface PropTypes {
  ingredients: string[]
}
interface StateTypes {}

class IngredientsList extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
  }

  render() {
    return (
      <div className="add-ingredients">
        <ul>
          {this.props.ingredients.map((ingredient, i) => (
            <Ingredient key={i} ingredient={ingredient} />
          ))}
        </ul>
      </div>
    )
  }
}

export default IngredientsList
