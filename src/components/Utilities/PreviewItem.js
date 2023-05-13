import React, { Component } from 'react';

class PreviewItem extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onItemClick(this.props.avatar.name);
  }

  render() {
    const { avatar } = this.props;

    return (
      <div
        className="face_shape_type avtar_btn active-element"
        key={avatar.name}
        onClick={this._onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.83 156.75">
          <g id={avatar.name} dangerouslySetInnerHTML={{ __html: avatar.code }} />
        </svg>
      </div>
    )
  }

}

export default PreviewItem;
