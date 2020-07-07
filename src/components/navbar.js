import React, {
    Component
} from 'react';
import axios from 'axios'
const APP_ID = '1eddd451'
const APP_KEY = '9acb3aa12defaeed4a85d8e39cddd73d'


class navbar extends Component {

    state = {
        foods: []
    }


    displayFoods = () => {
        return this.state.foods.map((eachfood) => {

        })
    }


    render() {
        console.log(JSON.parse(localStorage.getItem('res')))
        let obj = JSON.parse(localStorage.getItem('res'));
        return ( <
            div > {
                obj.hits.map(r => < li > {
                        r.recipe.label
                    } <
                    /li>)
                } <
                /div>
            );
        }
    }

    export default navbar;