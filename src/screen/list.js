import React from "react";

function List(prop) {
    return(
        <li style={styles.listItem} className = {prop.item.active}>{prop.item.name}&emsp;&nbsp;</li>
    );
}

const styles = {
    listItem: {
        listStyle: "none",
        fontSize: 20,
        padding: "8px 8px",
    }
}

export default List;