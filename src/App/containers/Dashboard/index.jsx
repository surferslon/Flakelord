import React from 'react';

import style from './style.scss';
import data from './data';

// TODO: rewrite on redux

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      colSize: 80,
      rowSize: 20,
      grid: null,
    };
  }

  componentWillMount() {
    const { colSize, rowSize } = this.state;
    const map = this.generateMap(colSize, rowSize);

    this.setState({
      grid: map,
    });
  }

  generateMap(colSize, rowSize) { // eslint-disable-line
    const result = [];
    for (let i = 0; i < rowSize; i += 1) {
      const colArr = [];
      for (let j = 0; j < colSize; j += 1) {
        const comparison = data.cells.find(item => item.x === i && item.y === j);
        if (comparison) {
          colArr.push(comparison);
        } else {
          colArr.push({ x: i, y: j });
        }
      }
      console.log(colArr);
      result.push(colArr);
    }
    return result;
  }

  render() {
    const { grid } = this.state;
    return (
      <div className={style.dashboard}>
        {
          grid.map((row, index) => (
            <div className={style.row} key={index}>
              {
                row.map((col, index) => (
                  <React.Fragment key={index}>
                    {
                      col.type ?
                        <React.Fragment>
                          {
                            !col.content && col.type === 'wall' ?
                              <div className={style.wall} />
                            :
                              <div className={style.unoccupiedGrid}>
                                {
                                  col.content.person.type === 'monstr' ?
                                    <div className={style.monstr} />
                                  :
                                    <div className={style.person} />
                                 
                                }
                              </div>
                          }
                        </React.Fragment>
                      : <div className={style.clearGrid} />
                    }
                  </React.Fragment>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Dashboard;
