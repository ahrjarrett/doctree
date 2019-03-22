import React from "react"

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
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default IngredientsList
