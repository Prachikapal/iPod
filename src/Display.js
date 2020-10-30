import React from "react";

function Display(prop) {

    let display = prop.menu.display;

    return (
        <>
            <div style={styles.container}>
                <img style={styles.img} src={display.img}
                    alt="connect to internet"
                />
                <p>{display.text}</p>
            </div>
        </>
    )
   
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