import React, { Component } from 'react';
import RenderAvatar from "./RenderAvatar";
import './Avatar.css';

class Avatar extends Component {
  render() {
    const { avatarData } = this.props;
    const { eyes, hair, head, mouth, nose } = this.props.options;
    
    return (
      <div className="Avatar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.83 156.75">
          <RenderAvatar name={head} avatars={avatarData.head} />
          <RenderAvatar name={hair} avatars={avatarData.hair} />
          <RenderAvatar name={eyes} avatars={avatarData.eyes} />
          <RenderAvatar name={mouth} avatars={avatarData.mouth} />
          <RenderAvatar name={nose} avatars={avatarData.nose} />
        </svg>
      </div>
    );
  }
}

export default Avatar;
