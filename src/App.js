import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Avatar from "./components/Avatar";
import Customizer from "./components/Customizer";
import defaultOptions from "./DefaultOptions";
// Using local data for now
import avatarData from "./resources/AvatarData";

class App extends Component {
  constructor(props) {
    super(props);

    this.currentFacing = 0;

    this.state = {
      ...defaultOptions.front,
    };

    this.changeAvatar = this.changeAvatar.bind(this);
    this.changeFacing = this.changeFacing.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  changeAvatar(avatarType, name) {
    this.setState({ [avatarType]: name });
  }

  changeFacing(currentFacing) {
    if (this.currentFacing !== currentFacing) {
      const facing = currentFacing === 0 ? "front" : "side";
      this.setState({ ...defaultOptions[facing] });
      this.currentFacing = currentFacing;
    }
  }

  handleSave() {
    const postData = {
      facing: this.currentFacing,
      avatar: {
        ...this.state,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/save-avatar`, postData)
      .then(() => {})
      .catch(() => {
        alert("Sorry! We are unable to process your request at the moment.");
      });
  }

  render() {
    return (
      <div className="App justify-content-center">
        <section className="avatar-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Avatar options={this.state} avatarData={avatarData} />
              </div>
              <div className="col-sm-6">
                <Customizer
                  avatarData={avatarData}
                  changeAvatar={this.changeAvatar}
                  changeFacing={this.changeFacing}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary float-right"
              onClick={this.handleSave}
            >
              Save
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
