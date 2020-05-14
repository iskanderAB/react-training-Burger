import React from "react";
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";
const BuildControls = (props) => {
    const controls = [
        {label : 'Salad' , type:'salad'},
        {label: 'Bacon' , type: 'bacon'},
        {label: 'Cheese' , type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];
    return(
    <div className={classes.BuildControls}>
        <p><strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added ={()=>props.ingredientAdded(ctrl.type)}
                removed = {()=>props.ingredientRemouved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>ORDER NOW</button>
    </div>);
};
export default BuildControls;
