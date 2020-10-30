import React from "react";
import "./index";
import ZingTouch from 'zingtouch';

class Keys extends React.Component {

    //wheel spinning functionality is written here
    componentDidMount = () => {
        let listenerElement = document.getElementById('container');
        var zt = new ZingTouch.Region(listenerElement);
        zt.bind(listenerElement, 'rotate', (e) => {
            let dis = e.detail.distanceFromLast;
            if(dis >= 5) {
                this.props.onClockwiseRotation();
                console.log("Clockwise",dis);
            }
            else if(dis <= -5) {
                this.props.onAntiClockwiseRotation();
                console.log("anti-Clockwise",dis);
            }
        },false);
    }


    //button click functionality
    handleClick = () => {
        let menu = this.props.menu;
        for(let i in menu) {
            if(menu[i].active === "active-menu" && menu[i].screen === false) {
                this.props.onScreenChange(i)
            }
            else if (menu[i].active === "" && menu[i].screen === true) {
                this.props.onBringMenu(i);
            }
        }
    }


    render() {
        return (
            <div className="keys">
                <div style={styles.outerWheel} id="container">
                    <div style={styles.innerWheel} onClick = {() => this.handleClick()}></div>
                    <div style={{ position: "absolute", top: "7%", left: "39%", fontWeight: "bold", color: "#615f67" }}>MENU</div>
                    <img
                        style={{ position: "absolute", width: 35, height: 35, top: "42%", left: "79%" }}
                        src="https://www.flaticon.com/svg/static/icons/svg/148/148736.svg"
                        alt="move forward"
                    />
                    <img
                        style={{ position: "absolute", width: 35, height: 35, top: "42%", left: "3%", transform: "rotate(180deg)" }}
                        src="https://www.flaticon.com/svg/static/icons/svg/148/148736.svg"
                        alt="rewind"
                    />
                    <img
                        style={{ position: "absolute", width: 35, height: 35, top: "78%", left: "42%" }}
                        src="https://www.flaticon.com/svg/static/icons/svg/890/890642.svg"
                        alt="move forward"
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    outerWheel: {
        position: "relative",
        width: 200,
        height: 200,
        backgroundColor: "white",
        borderRadius: "50%",
        margin: " 3px auto"
    },

    innerWheel: {
        position: "absolute",
        top: "25%",
        left: "25%",
        height: 100,
        width: 100,
        backgroundColor: "rgba(192, 192, 192, 0.479)",
        borderRadius: "50%",
    }

}

export default Keys;