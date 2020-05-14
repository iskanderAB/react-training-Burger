import React, {Component} from "react";
import MyAux from "../../hoc/MyAux";
import Burger from "../../components/Burger/Bureger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
    salad: 0.5 ,
    cheese: 0.4 ,
    meat: 1.3 ,
    bacon :0.6
};
class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable: false,
        purchasing: false
    };
    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key=>{
                return ingredients[key] ;
            })
            .reduce((sum,el) => {
                return sum + el ;
            },0);
        this.setState({purchasable : sum > 0 }) ;
    };
    addIngredientHandler = (type)=>{
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount+1;
      const updatedIngredients = {
          ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice ;
      const newPrice = oldPrice + priceAddition ;
      this.setState({ingredients:updatedIngredients ,totalPrice: newPrice});
      this.updatePurchasable(updatedIngredients);
    };
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0 ) return ;
        const updatedCount = oldCount >0 ? oldCount - 1 : 0 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceRemoved = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice =  (oldPrice - priceRemoved) >=0 ? oldPrice - priceRemoved : 0  ;
        this.setState({ingredients:updatedIngredients ,totalPrice: newPrice});
        this.updatePurchasable(updatedIngredients);
    };
    purchasingHandler = ()=>{
        this.setState({purchasing:true});
    };
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    };
    purchaseContinueHandler = ()=> {
        alert("you are continue");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0 ;
        }
        return(
            <MyAux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}
                                  price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemouved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchasingHandler}
                />
            </MyAux>
        );
    }
}
export default BurgerBuilder;
