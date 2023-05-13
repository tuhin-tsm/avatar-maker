import React, { Component } from 'react';
import NavListItem from "./Utilities/NavListItem";
import PreviewItem from "./Utilities/PreviewItem";

class Customizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facings: [ 'Front facing', 'Side facing'],
      tabs: [
        'eyes',
        'hair',
        'head',
        'mouth',
        'nose'
      ],
      currentFacing: 0,
      currentTab: 0,
    };

    this.changeFacing = this.changeFacing.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
  }

  changeFacing(currentFacing) {
    this.setState({ currentFacing });
    this.props.changeFacing(currentFacing);
  }

  changeTab(currentTab) {
    this.setState({ currentTab });
  }

  changeAvatar(name) {
    this.props.changeAvatar(this.state.tabs[this.state.currentTab], name)
  }

  render() {
    const { avatarData } = this.props;
    const { facings, tabs, currentFacing, currentTab } = this.state;
    console.log(`currentFacing: ${currentFacing}, currentTab: ${currentTab}`);
    
    // Filter all avatars by choosen facing type and get list of preview selectors
    const previewSelectors = avatarData[tabs[currentTab]].filter(avatar => avatar.facing === currentFacing);

    return (
      <div className="Customizer">
        {/* top level tabs */}
        <ul className="nav nav-tabs">
          {
            facings.map((facing, index) => (
              <NavListItem
                index={index}
                text={facing}
                key={index.toString()}
                active={currentFacing === index}
                onItemClick={this.changeFacing}
              />
            ))
          }
        </ul>
        <div className="tab-content">
            <ul className="nav nav-tabs">
              {
                tabs.map((tab, index) => (
                  <NavListItem
                    index={index}
                    text={tab}
                    key={index.toString()}
                    active={currentTab === index}
                    onItemClick={this.changeTab}
                  />
                ))
              }
            </ul>
        </div>
        <div className="tab-content">
          {
            previewSelectors.map(avatar => (
              <PreviewItem
                key={avatar.name}
                avatar={avatar}
                onItemClick={this.changeAvatar}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Customizer;
