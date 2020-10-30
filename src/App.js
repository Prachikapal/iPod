import React from "react";
import "./index.css";
import Keys from "./Keys";
import Screen from "./screen/Screen";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      menu: [
        {
          name: "Music",
          active: "active-menu",
          screen: false,
          display : 
          {
            img: "https://www.flaticon.com/svg/static/icons/svg/709/709559.svg",
            text : "",
          }
        },
        {
          name: "Calendar",
          active: "",
          screen: false,
          display:
          {
            img: "https://www.flaticon.com/svg/static/icons/svg/3652/3652191.svg",
            text: "It's 2020!"
          }
        },
        {
          name: "Games",
          active: "",
          screen: false,
          display: {
            img: "https://www.flaticon.com/svg/static/icons/svg/229/229800.svg",
            text: "Let's play Ludo!!"
          }

        },
        {
          name: "Settings",
          active: "",
          screen: false,
          display: {
            img: "https://www.flaticon.com/svg/static/icons/svg/3524/3524636.svg",
            text: "Settings"
          }

        }
      ]
    }
  }

  // when wheel is spin in clockwise direction then this function will be called to change active class
  changeActiveClass = () => {
    let menu = this.state.menu;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].active === "active-menu") {
        menu[i].active = "";
        if (i === menu.length - 1) {
          i = 0;
        }
        else {
          i = i + 1;
        }
        menu[i].active = "active-menu";
        break;
      }
    }
    this.setState({
      menu
    })
  }

  // when wheel is spin in anti-clockwise direction then this function will be called to change active class
  changeActiveClassAnti = () => {
    let menu = this.state.menu;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].active === "active-menu") {
        menu[i].active = "";
        if (i === 0) {
          i = menu.length - 1;
        }
        else {
          i = i - 1;
        }
        menu[i].active = "active-menu";
        break;
      }
    }
    this.setState({
      menu
    })
  }

  //after clicking the menu this function will be called to change the screen
  changeScreen = (index) => {
    let menu = this.state.menu;
    menu[index].screen = true;
    menu[index].active = "";
    this.setState({
      menu
    })
  }

  //this function will take us back to the menu
  bringMenu = (index) => {
    let menu = this.state.menu;
    menu[index].screen = false;
    menu[index].active = "active-menu";
    this.setState({
      menu
    })
  }

  render() {
    return (
      <div className="mobile">
        <Screen menu={this.state.menu}/>
        <Keys
          onClockwiseRotation={this.changeActiveClass}
          onAntiClockwiseRotation={this.changeActiveClassAnti}
          menu={this.state.menu}
          onScreenChange={this.changeScreen}
          onBringMenu={this.bringMenu}
        />
      </div>
    );
  }
}

export default App;
