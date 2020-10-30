import React from "react";
import Menu from "./Menu";

function Display(prop) {

    let menu = prop.menu;

    return (
        <>
            {(menu.name === "Music") ? <Menu menu={menu.display.subMenu} /> : <div style={styles.container}>
                <img style={styles.img} src={menu.display.img}
                    alt="connect to internet"
                />
                <p>{menu.display.text}</p>
            </div>
            }
        </>
    )

    // if(prop.menu.name === "Songs") {
    //     return(
    //         <>
    //         <Menu menu = {display.subMenu}/>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <div style = {styles.container}>
    //             <img style = {styles.img} src = {display.img} alt = "connect to internet"/>
    //             <p>{display.text}</p>
    //         </div>
    //     );
    // }
    // return (
    //     <div style = {styles.container}>
    //         <img style = {styles.img} src = {prop.menu.display.img} alt = "connect to internet"/>
    //         <p>{prop.menu.display.text}</p>
    //     </div>
    // );
}

const styles = {
    container: {
        position: "absolute",
        top: "3%",
        left: "1.9%",
        width: "96%",
        height: 255,
        border: "2px solid black",
        borderRadius: 5,
        textAlign: "center",
        paddingTop: 60,
        boxSizing: "border-box",
        backgroundColor: "white"
    },
    img: {
        width: 100,
        height: 100
    }
}

export default Display;