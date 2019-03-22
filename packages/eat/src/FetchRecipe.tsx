import React from "react"
import axios from "axios"
import { arraysEqual } from "@ahrjarrett/shared"

interface PropTypes {
  ingredients?: string[]
}
interface StateTypes {}

class FetchRecipe extends React.Component<PropTypes, StateTypes> {
  componentDidMount() {
    console.log("mounted!")
    console.log("axios!", axios)
  }

  componentDidUpdate() {
    console.log("updated!")
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { ingredients } = this.props
  //   if (!ingredients || !ingredients.length) return false
  //   if (ingredients.length !== nextProps.ingredients.length) return true
  //   if (arraysEqual(ingredients, nextState)) return false
  // }

  render() {
    return <div className="fetch-recipe">Fetch Recipe!</div>
  }
}

export default FetchRecipe
