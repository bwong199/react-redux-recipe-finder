import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoriteRecipeList extends Component {
    render() {

        console.log(this.props);

        return (
            <div>
                                <h4 className="link"><Link to="/">Home</Link></h4>

                <h4>Favorite Recipes</h4>
                {
                  this.props.favoriteRecipes ? this.props.favoriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem 
                            key={index}
                             recipe={recipe} 
                             favoriteButton = {false}
                             />
                        )
                    }): <div></div>
                }
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
