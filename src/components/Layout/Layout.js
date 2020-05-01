import React from "react";
import MyAux from "../../hoc/MyAux";
import classes from "./Layout.css";
const Layout = (props)=>(
    <MyAux>
        <div>
            toolBar ,
            sideBar ,
            BackDrop
        </div>
        <main className={classes.Content} >
            {props.children}
        </main>
    </MyAux>);
export default Layout ;
