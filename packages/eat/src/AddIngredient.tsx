import React from "react"

interface PropTypes {
  propogateIngredient: (ingredient: string) => void
}
interface StateTypes {
  ingredient: string
  errorMessage: string
}

class AddIngredient extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      ingredient: "",
      errorMessage: ""
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ingredient: e.target.value })
  }

  createErrorMessage = (
    ingredient: string,
    propogateFn: (ingredient: string) => void
  ) => {
    if (!ingredient || ingredient === "") {
      this.setState({ errorMessage: "You must enter an ingredient!" })
    } else {
      // Call propogate function only if no error!
      propogateFn(ingredient)
      this.setState({ errorMessage: "" })
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { ingredient } = this.state
    const { propogateIngredient } = this.props
    this.setState({ ingredient: "" })
    this.createErrorMessage(ingredient, propogateIngredient)
  }

  render() {
    return (
      <div className="add-ingredient">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Ingredient name..."
            value={this.state.ingredient}
            onChange={this.handleInputChange}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
        {this.state.errorMessage && (
          <div className="add-ingredient-error">{this.state.errorMessage}</div>
        )}
      </div>
    )
  }
}

export default AddIngredient
