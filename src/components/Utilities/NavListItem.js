import React, { Component } from 'react';

class NavListItem extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    this.props.onItemClick(this.props.index);
  }

  render() {
    const { text, active } = this.props;

    return (
      <li className="nav-item">
        <span
          className={'nav-link pointer ' + (active ? 'active' : '')}
          onClick={this._onClick}
        >
          {text}
        </span>
      </li>
    )
  }

}

export default NavListItem;
