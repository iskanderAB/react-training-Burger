import React, {Component} from "react";
import MyAux from "../../hoc/MyAux";
import Burger from "../../components/Burger/Bureger";
class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    };
    render() {
        return(
            <MyAux>
                <div>
                   <Burger ingredients={this.state.ingredients } />
                </div>
                <div>
                    BurgerControls
                </div>
            </MyAux>
        );
    }
}

export default BurgerBuilder;
