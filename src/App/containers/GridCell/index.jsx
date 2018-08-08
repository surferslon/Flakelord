import React from 'react';

import style from './style.scss';

class GridCell extends React.Component {
  getCellContent() {
    switch (this.props.data.type) {
      case 'wall':
        return (
          <div className={style.wall} />
        );
      case 'monstr':
        return (
          <div className={style.monstr} />
        );
      case 'player':
        return (
          <div className={style.person} />
        );
      default:
        return (
          <div className={style.clearGrid} />
        );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.getCellContent()}
      </React.Fragment>
    );
  }
}

export default GridCell;
