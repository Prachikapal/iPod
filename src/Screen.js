import React from "react";
import "./index.css";
import Display from "./Display";
import Menu from "./Menu";

function Screen(prop) {

    let flag = true ;
    let i;

    for(i = 0; i <prop.menu.length; i++) {
        if(prop.menu[i].screen === true) {
            flag = false;
            break;
        }
    }

    return(
        <>
        {(flag) ? <Menu menu = {prop.menu}/> : <Display menu = {prop.menu[i]}/>}
        </>
    )

}

export default Screen;