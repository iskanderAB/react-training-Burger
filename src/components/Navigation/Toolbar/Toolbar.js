import React from "react";
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";

const Toolbar = ()=> {
    return(
      <header className={classes.Toolbar}>
          <div>
              MENUE
          </div>
          <Logo/>
          <nav>
              ...
          </nav>
      </header>
    );
};
export default Toolbar ;
