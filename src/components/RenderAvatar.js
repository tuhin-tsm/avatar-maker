import React, { Component } from 'react';
import { getAvatarFromArray } from "../utilities";

class RenderAvatar extends Component {
  render() {
    const { name, avatars } = this.props;
    const avatar = getAvatarFromArray(avatars, name);

    return (
      <g id={avatar.name} dangerouslySetInnerHTML={{ __html: avatar.code }} />
    );
  }
}

export default RenderAvatar;
