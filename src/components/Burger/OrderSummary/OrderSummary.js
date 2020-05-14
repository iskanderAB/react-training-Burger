import React from "react";
import MyAux from "../../../hoc/MyAux";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
    const ingradientSumary = Object.keys(props.ingredients)
        .map(key => {
            return(
                <li key={key}>
                    <span style={{textTransform:"capitalize"}}> {key} :</span>
                    {props.ingredients[key]}
                </li>
            );
        });
    return(
        <MyAux>
            <h3> Your Order </h3>
            <h4><strong>Your price is : </strong> {props.price.toFixed(2)} </h4>
            <p> your ingredients is : </p>
            <ul>
                {ingradientSumary}
            </ul>
            <p> continue to checkout </p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>

        </MyAux>
    );
};
export default OrderSummary ;
