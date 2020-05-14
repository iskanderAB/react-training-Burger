import React from "react";
import MyAux from "../../hoc/MyAux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = (props)=>(
    <MyAux>
        <Toolbar/>
        <main className={classes.Content} >
            {props.children}
        </main>
    </MyAux>);
export default Layout ;
