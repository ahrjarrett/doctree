import React from "react"

interface PropTypes {
  ingredient: string
  removeIngredient: (e: React.MouseEvent<HTMLElement>) => void
}
interface StateTypes {}

class Ingredient extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
  }

  render() {
    return (
      <li className="user-ingredient">
        <div>{this.props.ingredient}</div>
        <span onClick={this.props.removeIngredient}>x</span>
      </li>
    )
  }
}

export default Ingredient
