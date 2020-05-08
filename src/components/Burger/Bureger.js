import React from "react";
import classes from "./Bureger.css"
import BurgerIngredient from "./BurgerIngridient/BurgerIngredient";
const Burger = ()=> {
    return(
     <div className={classes.Burger}>
         <BurgerIngredient type="bread-top"/>
         <BurgerIngredient type="cheese"/>
         <BurgerIngredient type="meat"/>
         <BurgerIngredient type="bread-bottom"/>
     </div>
    );
};
export default Burger;

