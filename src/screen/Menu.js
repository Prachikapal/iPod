import React from "react";
import List from "./list";

function Menu(prop) {

    return (
        <>
            <div className="screen">
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>iPod.js</strong></li>
                    {
                        prop.menu.map((e) => {
                            return <List item={e} key={Math.random()} />
                        })
                    }
                </ul>
            </div>
        </>
    )
}


const styles = {
    list: {
        boxSizing: "border-box",
        backgroundColor: "white",
        height: "93.5%",
        width: "50%",
        paddingLeft: 5
    },
    listItem: {
        listStyle: "none",
        fontSize: 20,
        padding: "8px 8px",
    }
}

export default Menu;