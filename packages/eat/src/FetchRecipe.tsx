import React from "react"
import axios from "axios"
import helpers from "@ahrjarrett/shared"
import { RecipeType } from "./App"

interface ResponseType {
  data: {
    q: string
    hits: [
      {
        recipe: RecipeType
      }
    ]
  }
}

interface PropTypes {
  ingredients: string[]
  propogateRecipes: (recipes: [{ recipe: RecipeType }]) => void
  query: string
}

interface StateTypes {
  response: ResponseType | null
  uri: string
}

class FetchRecipe extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      response: null,
      uri: ""
    }
  }

  // componentDidUpdate(prevProps: PropTypes, prevState: StateTypes) {
  //   console.group("component updating!")
  //   console.log("prevProps", prevProps)
  //   console.log("prevState", prevState)
  //   console.log("this.props", this.props)
  //   console.log("this.state", this.state)
  //   console.groupEnd()
  // }

  makeUriEndpoint = (QUERY: string) => {
    const APP_ID = process.env.REACT_APP_FOOD_APP_ID
    const APP_KEY = process.env.REACT_APP_FOOD_APP_KEY
    const uri = `https://api.edamam.com/search?q=${QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`
    return uri
  }

  handleFetch = async (e: React.MouseEvent<HTMLElement>) => {
    const uri = this.makeUriEndpoint(this.props.query)
    const response = await axios.get(uri)
    this.handleResponse(response)
  }

  handleResponse = (response: ResponseType | null) => {
    this.setState({ response })
    if (response) this.props.propogateRecipes(response.data.hits)
  }

  shouldComponentUpdate(nextProps: PropTypes, nextState: StateTypes) {
    if (nextState.response !== null) {
      // If next response & no previous response, update:
      if (!this.state.response) return true
      // If previous query is different than next query, update:
      if (nextState.response.data.q !== this.state.response.data.q) return true
    }
    if (!helpers.arraysEqual(this.props.ingredients, nextProps.ingredients))
      return true
    return false
  }

  render() {
    return (
      <div className="fetch-recipe">
        <h4>
          Query: <span>{this.props.query}</span>
        </h4>
        <button onClick={this.handleFetch}>Fetch Recipe!</button>
        {/* <pre style={{ width: "900px" }}>
          {!this.state.response
            ? "Wait for response..."
            : JSON.stringify(this.state.response, undefined, 2)}
        </pre> */}
      </div>
    )
  }
}

export default FetchRecipe
