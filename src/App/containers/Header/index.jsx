import React from 'react';
import style from './style.scss';
import data from './data';

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.socials}>
          <img alt="vk" src="#" />
          <img alt="mail" src="#" />
        </div>
        <div className={style.rightMenu}>
          {
            data.menuItems.map(item => (
              <div className={style.menuItem} key={item.id}>
                {item.name}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Header;
