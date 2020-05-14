import React from "react";
import classes from "./Bureger.css"
import BurgerIngredient from "./BurgerIngridient/BurgerIngredient";
const Burger = (props)=> {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(key =>{
            let array =  [...Array(props.ingredients[key])].map((_ , i ) => {
                return <BurgerIngredient key={key+i} type={key}/> ;
            });
            return array ;
        }).reduce((arr,element)=>{
            return arr.concat(element);
        },[]);
    return(
     <div className={classes.Burger}>
         <BurgerIngredient type="bread-top"/>
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom"/>
     </div>
    );
};
export default Burger;

