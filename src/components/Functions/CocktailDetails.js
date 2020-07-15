import React, { Component } from "react";
import axios from "axios";


class CocktailDetails extends Component {
  state = {
    cocktails: [],
  };

  async componentDidMount() {
    if(!this.props.cocktails) {
      let res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      // console.log(res.data);
  
      this.setState({
        cocktails: res.data.drinks,
      });
  
      // console.log(this.state.cocktails);
    }
    
  }

  displayIngredients = () => {

    const cocktails = this.props.cocktails || this.state.cocktails

    return cocktails.map((eachDrink) => {

      let i = 1;
      let result = [];
      result.push( <React.Fragment key='0'>

      <h1>{eachDrink.strDrink}</h1>
      <img
        src={eachDrink.strDrinkThumb}
        alt={eachDrink.strDrink}
      />
      </React.Fragment>)
      do {
        result.push(
          <li key={i}>{`${eachDrink[`strMeasure${i}`] || ''} ${
            eachDrink[`strIngredient${i}`] 
          }`}</li>
        );
        i++;
      } while (
        eachDrink[`strIngredient${i + 1}`] &&
        eachDrink[`strMeasure${i + 1}`]
      );
      return result;
    });
  };

  render() {

    return (
      <div>
        
        <div className="layout">
          {this.displayIngredients()}
        </div>

      </div>
    );
  }
}

export default CocktailDetails;
